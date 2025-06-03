import { useEffect, useState } from "react";
import Register from "./Register";
import type { RegisterType } from "../../types/register/registerType";
import { toast } from "react-toastify";
import { useCreateUserMutation } from "../../store/register/registerService";
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../validation/RegisterSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { UserType } from "../../types/user/UserType";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>("");


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(RegisterSchema) as any,
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      isFirstLogin: true,
      interestedCategories:[]
    },
  });
  useEffect(() => {
    setValue("role", role);
  }, [role, setValue]);

  const [createUser] = useCreateUserMutation();
 

  const handleFormSubmit = async (data:RegisterType) => {
   

    if (!data.role) {
      toast.error("Please select whether you are candidate or employer");
      return; // stop form submit here
    }
    console.log(data.role);
    const user: UserType = {
      // id is omitted here since backend assigns it
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      role: data.role,
      isFirstLogin: data.isFirstLogin,
      interestedCategories: data.interestedCategories,
      savedPosts: [], // initialize empty array
      appliedPosts: [],
      DOB: "",
      address: "",
      country: "",
      code: "", // instead of 0
      contact: "", // instead of 0
      occupation: "",
      introduction: "",
      skills: [],
      experience: [],
    };

    try {
      const response = await createUser(user).unwrap();
      console.log("response", response);

      toast.success("User registered successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to register user");
      console.error("API Error:", error);
    }
  };

  return (
    <Register
      setRole={setRole}
      role={role}
      handleFormSubmit={handleSubmit(handleFormSubmit)}
      register={register}
      errors={errors}
    />
  );
};

export default RegisterContainer;
