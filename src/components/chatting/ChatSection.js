import { useState } from "react";
import classes from "./ChatSection.module.css";
import { friends } from "../../utils/data/friends";
import Messages from "./Messages";

function ChatSection() {
  var parnerId = Number(window.location.pathname.slice(6));
  var userId = Number(localStorage.getItem("userId"));
  var friend = friends.find((friend) => friend.id === parnerId);
  return (
    <div className={classes.middle}>
      <h1>{parnerId}</h1>
      <h1>{window.location.pathname.slice(6)}</h1>

      <div className={classes.card} key={friend.id}>
        <img className={classes.img} src={friend.avatar} alt={friend.name} />
        <div>{friend.name}</div>
      </div>

      <Messages userId={userId} parnerId={parnerId} />

      <form className={classes.form}>
        <label>
          <input className={classes.input} type="text" required />
        </label>
      </form>
    </div>
  );
}

export default ChatSection;
