import { useState } from "react";
import classes from "./SendingMessages.module.css";
import { useContext } from "react";
import ScreenStatusContex from "../../../store/ScreenStatusContex";

const SendingMessages = (props) => {
  const statusCtx = useContext(ScreenStatusContex);
  const [inputs, setInputs] = useState("");
  const handleSendingMessage = (event) => {
    event.preventDefault();
    statusCtx.setMessages({
      id: statusCtx.length + 1,
      from: props.userId,
      to: props.parnerId,
      message: inputs,
    });
    console.log(statusCtx.messages);
    setInputs("");
  };
  return (
    <div className={classes.form} onSubmit={handleSendingMessage}>
      <form>
        <input type="submit" className={classes.btn} />
        <label>
          <input
            type="text"
            className={classes.input}
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SendingMessages;
