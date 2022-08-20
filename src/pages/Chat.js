import ChatSection from "../components/chatting/ChatSection";
import Contacts from "../components/chatting/Contacts";
import Information from "../components/chatting/Information";
import { useContext } from "react";
import ScreenStatusContex from "../store/ScreenStatusContex";


const Chat = () => {
  const statusCtx = useContext(ScreenStatusContex);
  return (
    <section>
      <Contacts />
      {statusCtx.chatActive && (
        <div>
          <ChatSection />
          <Information />
        </div>
      )}
    </section>
  );
};

export default Chat;
