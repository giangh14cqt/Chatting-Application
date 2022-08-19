import classes from "./ChatSection.module.css";
import Messages from "./Messages";

function ChatSection() {
  return (
    <div className={classes.middle}>
      <Messages />
      <form className={classes.form}>
        <label>
          <input className={classes.input} type="text" required />
        </label>
      </form>
    </div>
  );
}

export default ChatSection;
