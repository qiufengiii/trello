import React from "react";
import { useDragLayer, XYCoord } from "react-dnd";
import { Card } from "./Card";
import { Column } from "./Column";
import { CustomDragLayerContainer } from "./style";

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none",
    };
  }
  const { x, y } = currentOffset;
  return {
    position: "relative",
    left: x,
    top: y,
  };
}

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));
  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {item.type === "COLUMN" ? (
          <Column {...item} isPreview />
        ) : (
          <Card {...item} isPreview index={0} />
        )}
      </div>
    </CustomDragLayerContainer>
  ) : null;
};
