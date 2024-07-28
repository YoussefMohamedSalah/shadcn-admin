import { useState } from "react";
import { IItem } from "@/types/Forms/Item.type";
import { ExcelExport } from "@/utils/ExcelExport";

const calculateItemTotal = (item: IItem): IItem => {
  const price = parseFloat(item.price);
  const count = parseInt(item.count);

  if (!isNaN(price) && !isNaN(count)) {
    const total = price * count;
    return { ...item, total: String(total) };
  }

  return item;
};

const calculateItemsTotal = (items: IItem[]): number => {
  return items.reduce((total, item) => {
    const price = parseFloat(item.price);
    const count = parseInt(item.count);

    if (!isNaN(price) && !isNaN(count)) {
      return total + price * count;
    }

    return total;
  }, 0);
};

const useItems = () => {
  const [items, setItems] = useState<IItem[]>([{ description: "", name: "", count: "", price: "", total: "" }]);
  const [itemsSubTotal, setItemsSubTotal] = useState<number>(calculateItemsTotal(items));

  const handleItemChange = (index: number, prop: keyof IItem, value: string) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = { ...updatedItems[index], [prop]: value };

      if ((prop === "count" || prop === "price") && value !== "") {
        updatedItems[index] = { ...updatedItems[index], total: "0" };
      }

      updatedItems[index] = calculateItemTotal(updatedItems[index]);

      setItemsSubTotal(calculateItemsTotal(updatedItems));
      return updatedItems;
    });
  };

  const addItem = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems, { description: "", name: "", count: "", price: "", total: "0" }];
      return newItems;
    });
  };

  const removeItem = (index: number) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);

      setItems(updatedItems);
      setItemsSubTotal(calculateItemsTotal(updatedItems));
      return updatedItems;
    });
  };

  const addXLSXItems = (newItems: IItem[]) => {
    const combinedItems = [...items, ...newItems];
    setItems(combinedItems);
    setItemsSubTotal(calculateItemsTotal(combinedItems));
  };

  const getStringItems = () => {
    return JSON.stringify(items);
  };

  return {
    items,
    setItems,
    itemsSubTotal,
    getStringItems,
    handleItemChange,
    addItem,
    removeItem,
    addXLSXItems,
    exportItemsXLSX: () => ExcelExport(items, 'items'),
  };
};

export default useItems;
