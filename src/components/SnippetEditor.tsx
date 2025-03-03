"use client";

import { useState } from "react";
import { Textarea } from "./ui/textarea";

const SnippetEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex border-2 border-gray-500 overflow-hidden h-96">
      {/* Line numbers */}
      <div className="bg-gray-900 text-gray-400 text-right pr-2 py-2 w-12 flex flex-col items-end">
        {text.split("\n").map((_, i) => (
          <div key={i} className="leading-6">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Textarea */}
      <Textarea
        id="snippet-textarea"
        value={text}
        onChange={handleChange}
        className="flex-1 h-full border-gray-500 rounded-none bg-gray-800 text-white p-2 resize-none outline-none focus:ring-0 focus:border-gray-500 focus-visible:ring-0"
      />
    </div>
  );
};

export default SnippetEditor;
