import type { UseFormRegister, FieldErrors } from "react-hook-form";

export type LoginType = {
    email: string;
    password: string;
};

export type LoginProps = {

    handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    register: UseFormRegister<LoginType>;
errors: FieldErrors<LoginType>;
};
export type LoginResponseType = {
   access_token: string,
  refresh_token:string
}



