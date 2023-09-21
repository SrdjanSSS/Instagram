import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Messages from "./components/messages/Messages";
import { useState, useEffect } from "react";
import Login from "./components/atuhentication/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser, setLoading } from "./components/features/userSlice";
import Profile from "./components/profile/Profile";
import PrivacySettings from "./components/settings/PrivacySettings";
import Guard from "./components/atuhentication/Guard";
import Register from "./components/atuhentication/Register";
import { auth } from "./Firebase";
import Reels from "./components/reels/Reels";
import Search from "./components/search/Search";
import { Camera } from "./components/newPost/Camera";

const API_URL = "https://dog.ceo/api/breeds/image/random";

function App() {
  const user = useSelector(selectUser);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const [chatPopup, setChatPopup] = useState(false);
  const [settingsPopup, setSettingsPopup] = useState(false);
  const [logOutPopup, setLogoutPopup] = useState(false);
  const [storyPicture, setStoryPicture] = useState(
    "https://images.dog.ceo/breeds/dhole/n02115913_915.jpg"
  );
  const [inboxPopup, setInboxPopup] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "nikola",
      profileImage: storyPicture,
      timestamp: "30min",
      postImg: storyPicture,
    },
    {
      id: 2,
      user: "marko",
      profileImage: storyPicture,
      timestamp: "1h",
      postImg: storyPicture,
    },
    {
      id: 3,
      user: "janko",
      profileImage: storyPicture,
      timestamp: "1d",
      postImg: storyPicture,
    },
    {
      id: 4,
      user: "petko",
      profileImage: storyPicture,
      timestamp: "2d",
      postImg: storyPicture,
    },
  ]);

  const getPicture = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    const dogPng = data.message;

    setStoryPicture(dogPng);
  };

  useEffect(() => {
    getPicture();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <Routes>
          <Route
            path="newPost"
            element={<Camera setPosts={setPosts} posts={posts} />}
          />
          <Route path="search" element={<Search />} />
          <Route path="reels" element={<Reels storyPicture={storyPicture} />} />
          <Route path="register" element={<Register />} />
          <Route
            path="login"
            element={
              <Guard shouldRedirect={!!user} redirectRoute={"/"}>
                <Login />
              </Guard>
            }
          />
          <Route
            path={"/"}
            element={
              <Guard shouldRedirect={!user} redirectRoute={"/login"}>
                <Home posts={posts} storyPicture={storyPicture} />
              </Guard>
            }
          ></Route>
          <Route
            path="messages"
            element={
              <Messages
                inboxPopup={inboxPopup}
                setInboxPopup={setInboxPopup}
                storyPicture={storyPicture}
                chatPopup={chatPopup}
                setChatPopup={setChatPopup}
              />
            }
          />
          <Route
            path="profile"
            element={
              <Profile
                storyPicture={storyPicture}
                settingsPopup={settingsPopup}
                setSettingsPopup={setSettingsPopup}
              />
            }
          />
          <Route
            path="settings/privacy"
            element={
              <Guard shouldRedirect={!user} redirectRoute={"/login"}>
                <PrivacySettings
                  logOutPopup={logOutPopup}
                  setLogoutPopup={setLogoutPopup}
                />
              </Guard>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
