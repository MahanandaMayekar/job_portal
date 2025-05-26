export type ButtonGroupProps = {
    button1: string,
    button2: string,
    variant: "text" | "outlined" | "contained"; 
    color: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning"; 
    handleOnClickBtn1: () => void;
    handleOnClickBtn2: () => void;
}