import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { CardDragItem } from "./DragItem";
import { CardContainer } from "./style";
import { useItemDrag } from "./useItemDrag";

interface CardProps {
  text: string;
  id: string;
  index: number;
  columnId: string;
}

export const Card = ({ text, id, index, columnId }: CardProps) => {
  const { dispatch } = useAppState();
  const ref = useRef(null);
  const { drag } = useItemDrag({ type: "CARD", id, index, columnId, text });
  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;

      dispatch({
        type: "MOVE_TASK",
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
      });
      item.index = hoverIndex;
      item.columnId = columnId;
    },
  });

  drop(drag(ref));

  return <CardContainer ref={ref}>{text}</CardContainer>;
};
