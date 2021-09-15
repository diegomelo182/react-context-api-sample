import { createContext, useState } from 'react';

const ItemsContext = createContext({
  items: [],
  createItem: () => {},
  removeItem: () => {},
});

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const createItem = (object) => {
    setItems([...items, object]);
  }

  const removeItem = (index) => {
    if (!items[index]) return;

    const clonedItems = [...items];
    clonedItems.splice(index, 1)
    setItems(clonedItems);
  }

  return (
    <ItemsContext.Provider value={{items, createItem, removeItem}}>
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsProvider, ItemsContext };
