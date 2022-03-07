import { useState } from "react";
import { AddNewItemProps } from "../types";
import { NewItemForm } from "./NewItemForm";

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <button id="add-item-btn" onClick={() => setShowForm(true)} className={`${dark ? 'text-black' : 'text-white'} w-full max-w-[300px] text-left py-2.5 px-3 bg-[#ffffff3d] hover:bg-[#ffffff64] transition-colors duration-75 ease-in`}>
      {toggleButtonText}
    </button>
  );
};
