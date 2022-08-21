import classes from "./SendingMessages.module.css";

const SendingMessages = () => {
  return (
    <div className={classes.form}>
      <form>
        <input type="submit" className={classes.btn} />
        <label>
          <input type="text" className={classes.input} required />
        </label>
      </form>
    </div>
  );
};

export default SendingMessages;
