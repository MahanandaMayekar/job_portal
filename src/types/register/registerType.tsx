export type RegisterType = {
    fullName: string,
    email: string,
    password: string,
  confirmPassword: string,
    role:RoleType
}

export type RegisterProps = {
  registerData: RegisterType;
  setRegisterData: React.Dispatch<React.SetStateAction<RegisterType>>;
  role: RoleType;
  setRole: React.Dispatch<React.SetStateAction<RoleType>>;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type RoleType = "candidate" | "employer" | null;

export const registerInitialState: RegisterType = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: null, // or "candidate" if you want to default it
};