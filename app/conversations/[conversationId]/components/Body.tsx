"use client";

import { FullMessageType } from "@/app/types";
import { useState } from "react";

interface BodyProps {
  initialMessages: FullMessageType[] | null;
}

const Body = ({ 
    initialMessages, 
}: BodyProps) => {
  const [messages, setMessages] = useState(initialMessages);

  return (
  <div className="flex-1 overflow-y-auto">
    Body!
    </div>
    );
};

export default Body;