import { useState } from "react";
import type { LoginType } from "../../types/login/LoginTypes";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetUserByEmailQuery } from "../../store/register/registerService";
import { LoginSchema } from "../../validation/LoginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const LoginContainer = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(LoginSchema),
  });
  const [loginData, setLoginData] = useState<LoginType>({
    email: "john@mail.com",
    password: "changeme",
  });

  const { data: user } = useGetUserByEmailQuery(loginData.email);

  const handleFormSubmit = async () => {
    console.log("from submitted");

    const User = user?.[0];
    console.log("user", User);

    try {
      if (!User) {
        toast.error("User not found");
        return;
      }

      if (User.password !== loginData.password) {
        toast.error("Incorrect password");
        return;
      }

      const fakeToken = `fake-token-${Math.floor(
        Math.random() * 100000
      )}-${Date.now()}`;
      const userData = {
        fullName: User.fullName,
        email: User.email,
        role: User.role,
        avatar: `https://robohash.org/${User.fullName}`,
      };

      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.log("Login error:", error);
      toast.error("Something went wrong! unable to login");
    }
  };
  return (
    <Login
      loginData={loginData}
      setLoginData={setLoginData}
      handleFormSubmit={handleSubmit(handleFormSubmit)}
      register={register}
      errors={errors}
    />
  );
};

export default LoginContainer;
