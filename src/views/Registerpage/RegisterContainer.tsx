import { useState } from "react"
import Register from "./Register"
import type { RegisterType } from "../../types/register/registerType";
import type { RoleType } from "../../types/register/registerType";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCreateUserMutation } from "../../store/register/registerService";
import { useNavigate } from "react-router-dom";
const RegisterContainer = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState<RoleType>(null);
  useEffect(() => {
    setRegisterData((prev) => ({
      ...prev,
      role: role,
    }));
  }, [role]);
  const [createUser] = useCreateUserMutation();

  const [registerData, setRegisterData] = useState<RegisterType>({
    fullName: "John naik",
    email: "john@mail.com",
    password: "changeme",
    confirmPassword: "changeme",
    role: role,
  });
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!role) {

      toast.error("Please select whether you are candidate or employer")
      return

    }
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const response = await createUser(registerData).unwrap();
      console.log("response", response);
      toast.success("User registered successfully!");
      navigate("/login")


    } catch (error) {
      toast.error("Failed to register user");
      console.error("API Error:", error);

    }


  };
  return (
    <Register
      registerData={registerData}
      setRegisterData={setRegisterData}
      role={role}
      setRole={setRole}
      handleFormSubmit={handleFormSubmit}
    />
  );
}

export default RegisterContainer
