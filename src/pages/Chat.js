import ChatSection from "../components/chatting/ChatSection";
import Contacts from "../components/chatting/Contacts";
import Information from "../components/chatting/Information";

const Chat = () => {
  return (
    <section>
      <Contacts />
      <ChatSection />
      <Information />
    </section>
  );
};

export default Chat;
