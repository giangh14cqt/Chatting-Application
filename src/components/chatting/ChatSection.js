import classes from "./ChatSection.module.css";
import { friends } from "../../utils/data/friends";
import Messages from "./chatsection/Messages";
import SendingMessages from "./chatsection/SendingMessages";

function ChatSection() {
  var parnerId = Number(window.location.pathname.slice(6));
  var userId = Number(localStorage.getItem("userId"));
  var friend = friends.find((friend) => friend.id === parnerId);
  return (
    <div className={classes.middle}>

      <div className={classes.card} key={friend.id}>
        <img className={classes.img} src={friend.avatar} alt={friend.name} />
        <div>{friend.name}</div>
      </div>

      <Messages userId={userId} parnerId={parnerId} />

      <SendingMessages parnerId={parnerId} userId={userId}/>
    </div>
  );
}

export default ChatSection;
