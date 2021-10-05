import { FormEventHandler } from "react";
import { Redirect } from "react-router-dom";
import useCookie from "../../../hooks/useCookie";
import { PROFILE_URL } from "../../../routes";

export default function () {
  const [isLoggedIn, setLoginCookie] = useCookie("login");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setLoginCookie("1");
  };

  if (isLoggedIn === "1") {
    return <Redirect to={PROFILE_URL} />;
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label>
              <span>
                User: <input type="text" />
              </span>
            </label>
          </div>
          <div>
            <label>
              <span>
                Password: <input type="password" />
              </span>
            </label>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
