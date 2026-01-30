import { useState } from "react";
import "./Home.css";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m Kanchan’s AI Assistant. Ask me anything!" }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    let botReply = "I’m still learning 🙂 Try asking about skills, projects or contact.";

    const q = input.toLowerCase();

    if (q.includes("skill")) botReply = "I work with React, JavaScript, HTML, CSS.";
    else if (q.includes("project")) botReply = "I have built React apps, portfolio and API projects.";
    else if (q.includes("contact")) botReply = "You can contact me at kanchan31choudhary@gmail.com";
    else if (q.includes("resume")) botReply = "Resume is available in the Resume section.";

    setMessages([...messages, userMsg, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Icon */}
      <div className="chat-icon" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Box */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            AI Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
