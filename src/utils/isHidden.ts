import { DragItem } from '../DragItem';

export const isHidden = (
  isPreview: boolean | undefined,
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string
) => Boolean(!isPreview && draggedItem?.type === itemType && draggedItem?.id === id);
