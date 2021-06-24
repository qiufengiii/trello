interface Item {
  id: string;
}

export const findItemIndexByID = <T extends Item>(items: T[], id: string) => items.findIndex(item => item.id === id);

export const overrideItemAtIndex = <T>(array: T[], newItem: T, targetIndex: number) =>
  array.map((item, index) => (index !== targetIndex ? item : newItem));

export const moveItem = <T>(array: T[], from: number, to: number) => {
  const item = array[from];

  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};

export function removeItemAtIndex<T>(array: T[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insertItemAtIndex<T>(array: T[], item: T, to: number) {
  return array.splice(to, 0, item);
}
