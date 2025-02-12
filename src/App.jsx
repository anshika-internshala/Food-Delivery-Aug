import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import Memo from "./components/Memo";
import Ref from "./components/Ref";
import Profile from "./components/Profile";
import ProfileClassBased from "./components/ProfileClassBased";
import userContext from "./utils/userContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/store";

function App() {
  const [userName, setUserName] = useState("Athul");
  return (
    <>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Provider store={appStore}>
          <Header />
          <Outlet />
        </Provider>
      </userContext.Provider>
      {/* <Profile name="Anshika" />
      <ProfileClassBased name="Richa" /> */}
    </>
  );
}

export default App;
