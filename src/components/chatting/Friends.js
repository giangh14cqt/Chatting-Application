import classes from "./Friends.module.css";
import { Link } from "react-router-dom";

function Friends() {
  var friends = [
    {
      id: 1,
      name: "John",
      avatar:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
    {
      id: 2,
      name: "Mary",
      avatar:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
  ];
  return (
    <div className={classes.header}>
      <div className={classes.block}>
        {friends.map((friend) => (
          <div className={classes.card}>
            <img
              className={classes.img}
              src={friend.avatar}
              alt={friend.name}
            />
            <Link to={"/chat/" + friend.id}>{friend.name}</Link>
            {/* <div className={classes.name}>{friend.name}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
