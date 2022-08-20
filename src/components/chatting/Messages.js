import classes from "./Messages.module.css";
import { messages } from "../../utils/data/messages";

function Messages(props) {
  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
