import classes from "./Messages.module.css";
import { messages } from "../../../utils/data/messages";

function Messages(props) {
  return (
    <header className={classes.header}>
      <nav>
        {messages.map((message) => (
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
