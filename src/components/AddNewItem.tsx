import { useState } from 'react';
import { AddNewItemProps } from '../types';
import { AddItemButton } from './AddItemButton';
import { NewItemForm } from './NewItemForm';

export const AddNewItem = (props: AddNewItemProps) => {
  const { onAdd, toggleButtonText, dark } = props;
  const [showForm, setShowForm] = useState(false);

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
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};