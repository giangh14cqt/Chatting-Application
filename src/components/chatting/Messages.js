import classes from "./Messages.module.css";

function Messages() {
    var messages = [
        {
            id: 1,
            message: "Hello",
        },
        {
            id: 2,
            message: "How are you?",
        }
    ];
    return (
        <div>
            <ul>
                {messages.map(message => <li>{message.message}</li>)}
            </ul>
        </div>
    );
}

export default Messages;