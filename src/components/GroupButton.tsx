import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import type { ButtonGroupProps } from "../types/ButtonGroup/buttobGroupTypes";
const GroupButton = ({
    button1,
    button2,
    variant,
    color,
    handleOnClickBtn1,
    handleOnClickBtn2,
}: ButtonGroupProps) => {
    return (
      <div>
        <ButtonGroup
          variant={variant}
          color={color}
          aria-label="Basic button group"
          size="large"
        >
          <Button onClick={handleOnClickBtn1}>{button1}</Button>
          <Button onClick={handleOnClickBtn2}>{button2}</Button>
        </ButtonGroup>
      </div>
    );
};

export default GroupButton;
