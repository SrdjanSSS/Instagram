import React from "react";
import Styles from "./PrivacySettings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faA,
  faAt,
  faBell,
  faBellSlash,
  faChartSimple,
  faChevronLeft,
  faChevronRight,
  faCircleInfo,
  faCircleUser,
  faClock,
  faComment,
  faDownload,
  faExclamation,
  faEyeSlash,
  faFaceGrinStars,
  faHand,
  faHeart,
  faImages,
  faLanguage,
  faLifeRing,
  faLock,
  faMagnifyingGlass,
  faMessage,
  faMobile,
  faShare,
  faStar,
  faSuitcase,
  faTruckFast,
  faUniversalAccess,
  faUser,
  faUserPlus,
  faUserSlash,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { LogOutAlert } from "./LogOutAlert";

const PrivacySettings = ({ logOutPopup, setLogoutPopup }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.box1}>
        <div className={Styles.header}>
          <Link style={{ color: "white" }} to={"/profile"}>
            <FontAwesomeIcon
              className={Styles.chevronIcon}
              icon={faChevronLeft}
            />
          </Link>
          <h2>Settings and privacy</h2>
        </div>
        <div className={Styles.inputBox}>
          <FontAwesomeIcon
            className={Styles.MagnifyingGlassIcon}
            icon={faMagnifyingGlass}
          />
          <input className={Styles.input} type="text" placeholder="Search" />
        </div>
        <div className={Styles.centerContainer}>
          <div className={Styles.centerHeader}>
            <h5>Your account</h5>
            <h5>Meta</h5>
          </div>
          <div className={Styles.boxText}>
            <div className={Styles.IconTextBox}>
              <FontAwesomeIcon className={Styles.icon} icon={faCircleUser} />
              <div className={Styles.centerText}>
                <h3 className={Styles.htext}>Account center</h3>
                <h5 className={Styles.hhtext}>
                  Password, security, personal data, comercials
                </h5>
              </div>
            </div>
            <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
          </div>
          <div className={Styles.h5Text}>
            <h5>
              Manage related product usage and account settings for different
              Meta technologies. Learn more
            </h5>
          </div>
        </div>
      </div>
      <div className={Styles.boxTexTContainer}>
        <h5 className={Styles.text}>How you use instagram</h5>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faBell} />
            <h3 className={Styles.htext}>Notifications</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faClock} />
            <h3 className={Styles.htext}>Time spent</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
      </div>
      <div className={Styles.boxTexTContainer}>
        <h5 className={Styles.text}>What is being shown</h5>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faStar} />
            <h3 className={Styles.htext}>Favourites</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faBellSlash} />
            <h3 className={Styles.htext}>Hidden accounts</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faImages} />
            <h3 className={Styles.htext}>Suggested content</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
            <h3 className={Styles.htext}>Number of likes</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
      </div>
      <div className={Styles.boxTexTContainer}>
        <h5 className={Styles.text}>Who can se your content</h5>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faLock} />
            <h3 className={Styles.htext}>Account privacy</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faFaceGrinStars} />
            <h3 className={Styles.htext}>Close friends</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faHand} />
            <h3 className={Styles.htext}>Blocked</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faEyeSlash} />
            <h3 className={Styles.htext}>Hide story and live</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
      </div>
      <div className={Styles.boxTexTContainer}>
        <h5 className={Styles.text}>Other people's interactions with you</h5>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faMessage} />
            <h3 className={Styles.htext}>Messages and story replies</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faAt} />
            <h3 className={Styles.htext}>Tags and mentions</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faComment} />
            <h3 className={Styles.htext}>Comments</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faShare} />
            <h3 className={Styles.htext}>Sharing</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faUserSlash} />
            <h3 className={Styles.htext}>Limited</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faExclamation} />
            <h3 className={Styles.htext}>Limited interactions</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faA} />
            <h3 className={Styles.htext}>Hidden words</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faUserPlus} />
            <h3 className={Styles.htext}>Follow and call friends</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
      </div>
      <div className={Styles.boxTexTContainer}>
        <h5 className={Styles.text}>Your application and multimedia content</h5>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faDownload} />
            <h3 className={Styles.htext}>Archive and downloads</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faUniversalAccess} />
            <h3 className={Styles.htext}>Accessibility</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faLanguage} />
            <h3 className={Styles.htext}>Language</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faChartSimple} />
            <h3 className={Styles.htext}>
              Consumption of mobile internet and multimedia
            </h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faMobile} />
            <h3 className={Styles.htext}>Website permissions</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
      </div>
      <div className={Styles.boxTexTContainer}>
        <h5 className={Styles.text}>For families</h5>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faUsers} />
            <h3 className={Styles.htext}>Supervision</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
      </div>
      <div className={Styles.boxTexTContainer}>
        <h5 className={Styles.text}>For proffesionals</h5>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faSuitcase} />
            <h3 className={Styles.htext}>Account type and tools</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
      </div>
      <div className={Styles.boxTexTContainer}>
        <h5 className={Styles.text}>Your fundraising events and campaigns</h5>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faTruckFast} />
            <h3 className={Styles.htext}>Orders and payments</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
      </div>
      <div className={Styles.boxTexTContainer}>
        <h5 className={Styles.text}>Your help and support</h5>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faLifeRing} />
            <h3 className={Styles.htext}>Help</h3>
          </div>{" "}
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faUser} />
            <h3 className={Styles.htext}>Account status</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
        <div className={Styles.boxText}>
          <div className={Styles.IconTextBox}>
            <FontAwesomeIcon className={Styles.icon} icon={faCircleInfo} />
            <h3 className={Styles.htext}>Information</h3>
          </div>
          <FontAwesomeIcon className={Styles.icon} icon={faChevronRight} />
        </div>
      </div>
      <div className={Styles.logOutBox}>
        <h5 className={Styles.logOutText}>Logging in</h5>
        <h4 className={Styles.logOutText1}>Add account</h4>
        <h4 onClick={() => setLogoutPopup(true)} className={Styles.logOutText2}>
          Log out
        </h4>
      </div>
      <LogOutAlert
        setLogoutPopup={setLogoutPopup}
        logOutTrigger={logOutPopup}
      />
    </div>
  );
};

export default PrivacySettings;
