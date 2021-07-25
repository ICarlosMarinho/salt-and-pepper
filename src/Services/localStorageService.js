function getList(listName) {
  return JSON.parse(localStorage.getItem(listName)) ?? [];
}

function addItem(item, listName) {
  const list = [...getList(listName), item];

  localStorage.setItem(listName, JSON.stringify(list));

  return list;
}

function updateItem(updatedItem, listName, itemKeyName) {
  const list = getList(listName).map((currentItem) => {
    return updatedItem[itemKeyName] === currentItem[itemKeyName]
      ? updatedItem
      : currentItem;
  });

  localStorage.setItem(listName, JSON.stringify(list));

  return list;
}

function deleteItem(listName, itemKeyName, itemKeyValue) {
  const list = getList(listName).filter(
    (item) => item[itemKeyName] !== itemKeyValue
  );

  localStorage.setItem(listName, JSON.stringify(list));

  return list;
}

export { getList, addItem, updateItem, deleteItem };
