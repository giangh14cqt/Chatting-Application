import { useState, createContext } from "react";

const ScreenStatusContex = createContext({
  chatActive: false,
  parnerId: null,
  setScreenStatus: (chatActive, parnerId) => {},
  setMessages: (messages) => {},
  length: 0,
  messages: [],
});

export function ScreenStatusProvider(props) {
  const [userChatActive, setUserChatActive] = useState(false);
  const [userParnerId, setUserParnerId] = useState(null);
  const [userMessages, setUserMessages] = useState([
    {
      id: 1,
      from: 1,
      to: 2,
      message: "Hello",
    },
    {
      id: 2,
      from: 2,
      to: 1,
      message: "How are you?",
    },
    {
      id: 3,
      from: 1,
      to: 2,
      message: "I'm good",
    },
    {
      id: 4,
      from: 2,
      to: 1,
      message: "Cool",
    },
  ]);

  const setScreenStatusHandle = (chatActive, parnerId) => {
    setUserChatActive(chatActive);
    setUserParnerId(parnerId);
  };

  const setMessagesHandle = (messages) => {
    setUserMessages(userMessages.concat(messages));
  };

  const contex = {
    chatActive: userChatActive,
    parnerId: userParnerId,
    setScreenStatus: setScreenStatusHandle,
    messages: userMessages,
    setMessages: setMessagesHandle,
    length: userMessages.length,
  };

  return (
    <ScreenStatusContex.Provider value={contex}>
      {props.children}
    </ScreenStatusContex.Provider>
  );
}

export default ScreenStatusContex;
