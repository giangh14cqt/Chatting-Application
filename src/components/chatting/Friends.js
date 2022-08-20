import classes from "./Friends.module.css";
import { Link } from "react-router-dom";
import { friends } from "../../utils/data/friends";
import { useContext } from "react";
import ScreenStatusContex from "../../store/ScreenStatusContex";

function Friends() {
  const statusCtx = useContext(ScreenStatusContex);
  return (
    <div className={classes.header}>
      <div className={classes.block}>
        {friends.map((friend) => (
          <div className={classes.card} key={friend.id}>
            <img
              className={classes.img}
              src={friend.avatar}
              alt={friend.name}
            />
            <Link
              to={"/chat/" + friend.id}
              onClick={() => {
                statusCtx.setScreenStatus(true, friend.id);
              }}
            >
              {friend.name}
            </Link>
            {/* <div className={classes.name}>{friend.name}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
