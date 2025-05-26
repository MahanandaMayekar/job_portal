import login from "../../assets/login1.jpg";
import { Stack, TextField } from "@mui/material";
import GroupButton from "../../components/GroupButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { RegisterProps } from "../../types/register/registerType";

const Register = ({
  registerData,
  setRegisterData,
  role,
  setRole,
  handleFormSubmit,
}: RegisterProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${login})`,
          // or '100vh', '100%', etc.
        }}
      />

      {/* Content */}
      <motion.div
        className="relative text-4xl font-bold bg-gray-50 opacity-90 m-10 p-10 rounded-3xl w-full sm:w-1/2 text-blac shadow"
        initial={{ opacity: 0, scale: 0.95, y: -250 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={10}
          sx={{ mb: 4 }}
        >
          <h2 className="text-black font-serif underline">
            Create Your Account
          </h2>
        </Stack>
        <Stack
          direction="column"
          spacing={5}
          className="m-auto"
          justifyContent="center"
          alignItems="center"
        >
          <div className="flex flex-col items-center justify-center gap-1 ">
            <GroupButton
              button1="Candidate"
              button2="Employer"
              handleOnClickBtn1={() => setRole("candidate")}
              handleOnClickBtn2={() => setRole("employer")}
              variant="contained"
              color="secondary"
            />
            <p className="text-xs text-center text-gray-500">
              Are you a{" "}
              <span className="font-bold text-gray-700">Candidate</span> or{" "}
              <span className="font-bold text-gray-700">Employer?</span>
            </p>
          </div>
          <form
            className="flex flex-col gap-4 w-2/3 m-auto"
            onSubmit={handleFormSubmit}
          >
            <TextField
              id="text-input"
              label="Full Name"
              variant="outlined"
              type="text"
              size="small"
              value={registerData.fullName}
              onChange={(e) =>
                setRegisterData({ ...registerData, fullName: e.target.value })
              }
              required
              autoFocus
              
            />
            <TextField
              id="email-input"
              label="Email"
              variant="outlined"
              type="email"
              size="small"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              required
            />
            <TextField
              id="password-input"
              label="Password"
              variant="outlined"
              type="password"
              size="small"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              required
            />
            <TextField
              id="ConfirmPassword-input"
              label="Confirm Password"
              variant="outlined"
              type="password"
              size="small"
              required
              value={registerData.confirmPassword}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  confirmPassword: e.target.value,
                })
              }
            />
            <p className="text-xs text-center text-gray-500 flex flex-row items-center justify-center">
              Already have an account?
              <Link to="/login">
                <span className="font-extrabold text-gray-700 hover:text-blue-600 hover:underline ml-2">
                  Login
                </span>
              </Link>
            </p>
            <Button variant="contained" color="secondary" type="submit">
              Sign up
            </Button>
          </form>
        </Stack>
      </motion.div>
    </div>
  );
};

export default Register;
