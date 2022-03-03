import { useState } from "react";
import { useFocus } from "../utils/hooks/useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  return (
    <div className="new-item-form-container">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="new-item-input"
      />
      <button onClick={() => onAdd(text)}>Create</button>
    </div>
  );
};
