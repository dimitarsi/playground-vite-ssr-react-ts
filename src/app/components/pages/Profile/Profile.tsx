import { FC } from "react";
import { Redirect, withRouter } from "react-router";
import useCookie from "../../../hooks/useCookie";
import { LOGIN_URL } from "../../../routes";

const ProfilePage = withRouter((props) => {
  const [isLoggedIn, setLoginCookie] = useCookie("login");

  if (isLoggedIn !== "1") {
    return <Redirect to={LOGIN_URL} />;
  }

  return (
    <div>
      <h2>Hello User</h2>
      <button onClick={() => setLoginCookie("0")}>Logout</button>
    </div>
  );
});

export default ProfilePage;
