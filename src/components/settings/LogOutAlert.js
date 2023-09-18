import Styles from "./PrivacySettings.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { motion } from "framer-motion";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";

export const LogOutAlert = ({ logOutTrigger, setLogoutPopup }) => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    signOut(auth);
  };

  return logOutTrigger ? (
    <div className={Styles.alertContainer}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={Styles.alertBox}
      >
        <div className={Styles.alertText}>
          <h4 className={Styles.Alerttext}>Log out of all accounts?</h4>
          <h5 className={Styles.Alerttext}>
            Any drafts that you've saved will still be avilable on this device
          </h5>
          <div className={Styles.logOutBox}>
            <h4 onClick={(e) => handleLogout(e)} className={Styles.Alerttext1}>
              Log out
            </h4>

            <h4
              onClick={() => setLogoutPopup(false)}
              className={Styles.Alerttext2}
            >
              Cancel
            </h4>
          </div>
        </div>
      </motion.div>
    </div>
  ) : (
    ""
  );
};
