import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import GroupButton from "./GroupButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomMenu from "./CunstomMenu";
const Navbar = () => {
  const navigate = useNavigate()
 const token = localStorage.getItem("token");

  console.log("Token:", token);
  return (
    <div className="flex items-center justify-between font-medium py-5 px-6 h-24   shadow-lg bg-blue-200/95 sticky top-0 z-50 ">
      {/* Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        className="w-36 h-36 object-contain shadow-sm rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Navigation Links */}
      {!token && (
        <ul className="hidden sm:flex gap-5 text-sm text-black text-center h-16 items-center">
          <NavLink
            to="/"
            className="flex items-center justify-center gap-1 flex-col h-full"
          >
            <p>HOME</p>
            <hr className="w-3/4 h-0.5 bg-black hidden" />
          </NavLink>

          <NavLink
            to="/about"
            className="flex items-center justify-center gap-1 flex-col h-full"
          >
            <p>ABOUT</p>
            <hr className="w-3/4 h-0.5 bg-black hidden" />
          </NavLink>

          <NavLink
            to="/contact"
            className="flex items-center justify-center gap-1 flex-col h-full"
          >
            <p>CONTACT</p>
            <hr className="w-3/4 h-0.5 bg-black hidden" />
          </NavLink>
        </ul>
      )}

      {/* Group Button */}
      <div className="flex flex-row gap-5">
        {!token && (
          <motion.div
            className="flex items-center gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GroupButton
              variant="contained"
              color="secondary"
              button1="Login"
              button2="Register"
              handleOnClickBtn1={() => navigate("/login")}
              handleOnClickBtn2={() => navigate("/register")}
            />
          </motion.div>
        )}

        {token && <CustomMenu />}
      </div>
    </div>
  );
};

export default Navbar;
