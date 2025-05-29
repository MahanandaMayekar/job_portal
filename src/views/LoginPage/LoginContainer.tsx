import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginSchema } from "../../validation/LoginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Login from "./Login";
import type { LoginType } from "../../types/login/LoginTypes";
import { useState } from "react";
import { FirstLoginModal } from "../../components/FirstLoginModal";
import { useUpdateUserMutation } from "../../store/register/registerService";
import { useLazyGetUserByEmailQuery } from "../../store/register/registerService";
import { useGetUserByIdQuery } from "../../store/register/registerService";



const LoginContainer = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState<string>()
    const [updateUser] = useUpdateUserMutation()
  const [triggerGetUser] = useLazyGetUserByEmailQuery();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
     } = useForm<LoginType>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });



  

  const handleFormSubmit = async (formData: LoginType) => {
     const user = await triggerGetUser(formData.email).unwrap();
    console.log("form submitted", formData);
    
    
    const User = user?.[0];
    console.log("user", User);
      setId(User?.id)
 
   

    try {
      if (!User) {
        toast.error("User not found");
        return;
      }

      if (User.password !== formData.password) {
        toast.error("Incorrect password");
        return;
      }

      const fakeToken = `fake-token-${Math.floor(
        Math.random() * 100000
      )}-${Date.now()}`;
      

      localStorage.setItem("token", fakeToken);
      const userData = {
        id:User.id,
        fullName: User.fullName,
        email: User.email,
        role: User.role,
        avatar: `https://robohash.org/${User.fullName}`,
        interestedCategories: User.interestedCategories,
        isFirstLogin: User.isFirstLogin,
        savedPosts:User.savedPosts,
            appliedPosts:User.appliedPosts
      };
      localStorage.setItem("user", JSON.stringify(userData));
     
     
      if (User.isFirstLogin) {
        setShowModal(true); // show category selection modal
        return; // wait for them to pick categories
      }
      navigate("/dashboard");
     
      toast.success("Login successful!");
    } catch (error) {
      console.log("Login error:", error);
      toast.error("Something went wrong! unable to login");
    }
  };
  
  return (
    <>
      <Login
        handleFormSubmit={handleSubmit(handleFormSubmit)}
        register={register}
        errors={errors}
      />

      {showModal && (
        <FirstLoginModal
          onClose={async (categories) => {
            if (!id) return;
            const result = await updateUser({
              id,
              updateData: {
                isFirstLogin: false,
                interestedCategories: categories,
              },
            });
            const user = { id: id, ...result.data }
            console.log("user first time", user);
            console.log("user first time result", result);
            
           
            localStorage.setItem("user", JSON.stringify(user));
            

            setShowModal(false);
            navigate("/dashboard");
          
          }}
        />
      )}
    </>
  );
};

export default LoginContainer;
