import { useState } from "react";
import { NewItemFormProps } from "../types";
import { useFocus } from "../utils/hooks/useFocus";

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <div id="new-item-form-container" className="max-w-[300px] flex flex-col gap-2 w-full items-start">
      <textarea
      id="new-item-input"
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
        className="rounded border-none shadow-md px-4 py-2 w-full resize-none"
      ></textarea>
      <button id="new-item-button" className="bg-secondary rounded border-none shadow-none text-white px-3 py-1.5 text-center" onClick={() => onAdd(text)}>Add task</button>
    </div>
  );
};
