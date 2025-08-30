import { createContext, useState } from "react";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [history, setHistory] = useState([]);

  const addMessage = (role, content) => {
    setHistory((prev) => [...prev, { role, content }]);
  };

  return (
    <ChatContext.Provider value={{ history, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
