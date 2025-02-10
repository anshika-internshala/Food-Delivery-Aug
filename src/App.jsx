import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import Memo from "./components/Memo";
import Ref from "./components/Ref";
import Profile from "./components/Profile";
import ProfileClassBased from "./components/ProfileClassBased";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Profile name="Anshika" />
      <ProfileClassBased name="Richa" /> */}
    </>
  );
}

export default App;
