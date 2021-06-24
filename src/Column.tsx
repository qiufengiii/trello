import AddNewItem from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./style";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";
import { useItemDrag } from "./useItemDrag";
import { useRef } from "react";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({
  text,
  id,
  index,
}: React.PropsWithChildren<ColumnProps>) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });

  drag(ref);

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => {
          dispatch({
            type: "ADD_TASK",
            payload: {
              text,
              listId: id,
            },
          });
        }}
        dark
      />
    </ColumnContainer>
  );
};
