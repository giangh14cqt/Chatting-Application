import classes from "./Messages.module.css";
import { useContext } from "react";
import ScreenStatusContex from "../../../store/ScreenStatusContex";

function Messages(props) {
  const statusCtx = useContext(ScreenStatusContex);
  return (
    <header className={classes.header}>
      <nav>
        {statusCtx.messages.map((message) => (
          <div className={classes.block} key={message.id}>
            <li
              className={
                message.from === props.userId
                  ? classes.fromMe
                  : classes.fromParner
              }
            >
              {message.message}
            </li>
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Messages;
