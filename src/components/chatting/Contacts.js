import classes from "./Contacts.module.css";
import Friends from "./contactsection/Friends";

function Contacts() {
  return (
    <section className={classes.leftside}>
      <h1>Contacts:</h1>
      <form>
        <label>
          <input type="text" />
        </label>
      </form>
      <Friends />
    </section>
  );
}

export default Contacts;
