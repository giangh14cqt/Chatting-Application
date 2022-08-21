import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import ScreenStatusContex from "../../store/ScreenStatusContex";

function MainNavigation() {
  const statusCtx = useContext(ScreenStatusContex);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Chatting Application</div>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                statusCtx.setScreenStatus(false, null);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => {
                statusCtx.setScreenStatus(false, null);
              }}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              onClick={() => {
                statusCtx.setScreenStatus(false, null);
              }}
            >
              Chat
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
