import { useState, createContext } from "react";

const ScreenStatusContex = createContext({
    chatActive: false,
    parnerId: null,
    setScreenStatus: (chatActive, parnerId) => {},
});

export function ScreenStatusProvider(props) {
    const [userChatActive, setUserChatActive] = useState(false);
    const [userParnerId, setUserParnerId] = useState(null);

    const setScreenStatusHandle = (chatActive, parnerId) => {
        setUserChatActive(chatActive);
        setUserParnerId(parnerId);
    };

    const contex = {
        chatActive: userChatActive,
        parnerId: userParnerId,
        setScreenStatus: setScreenStatusHandle,
    }

    return (
        <ScreenStatusContex.Provider value={contex}>
            {props.children}
        </ScreenStatusContex.Provider>
    );
}

export default ScreenStatusContex;