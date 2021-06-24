import React, { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./style";
import { useFocus } from "./utils/useFocus";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export default function NewItemForm({ onAdd }: NewItemFormProps) {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
}
