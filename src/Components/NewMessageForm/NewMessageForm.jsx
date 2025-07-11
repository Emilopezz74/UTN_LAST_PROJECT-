import React, { useContext } from "react";
import { MessagesContext } from "../../Context/MessagesContext";
import "./NewMessageForm.css";
import { BiSolidSend } from "react-icons/bi";

export default function NewMessageForm() {
    const { addNewMessage } = useContext(MessagesContext);

    function submitHandler(e) {
        e.preventDefault();
        const inputText = e.target.text.value.trim();
        if (inputText.length === 0) return;
        addNewMessage(inputText);
        e.target.reset();
    }

    return (
        <form onSubmit={submitHandler} className="container-form">
            <div className="container-form-text">
                <input
                    id="text"
                    name="text"
                    className="textarea-container"
                    placeholder="type a message.."
                    required
                    autoComplete="off"
                    autoFocus
                />
            </div>

            <div className="container-btn-form">
                <button type="submit" className="btn" aria-label="Send message">
                    <BiSolidSend />
                </button>
            </div>
        </form>
    );
}
