import { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Function to handle user input and send to AI
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("https://api.openai.com/v1/completions", {
        model: "text-davinci-003",
        prompt: input,
        max_tokens: 100,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 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`,
        },
      });

      setMessages([...newMessages, { text: response.data.choices[0].text.trim(), sender: "bot" }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Sorry, I couldn't process that.", sender: "bot" }]);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-md w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Chat with Me</h2>
      
      <div className="h-60 overflow-y-auto border border-gray-700 rounded p-3">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 my-2 rounded ${msg.sender === "bot" ? "bg-gray-800 text-left" : "bg-blue-600 text-right"}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-grow p-2 rounded-l bg-gray-800 text-white"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-blue-500 p-3 rounded-r">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
