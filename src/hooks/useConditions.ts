import { useState } from "react";
import { ICondition } from "@/types/Forms/condition.type";
import { ExcelExport } from "@/utils/ExcelExport";

const useConditions = () => {
  const [conditions, setConditions] = useState<ICondition[]>([]);

  const handleConditionChange = (index: number, value: string) => {
    setConditions((prevConditions) => {
      const updatedConditions = [...prevConditions];
      updatedConditions[index].content = value;
      return updatedConditions;
    });
  };

  const addCondition = () => {
    setConditions((prevConditions) => {
      return [...prevConditions, { id: undefined, content: "" }]
    });
  };

  const removeCondition = (index: number) => {
    setConditions((prevConditions) => {
      const updatedConditions = [...prevConditions];
      updatedConditions.splice(index, 1);
      return updatedConditions;
    });
  };

  const getStringConditions = () => {
    return JSON.stringify(conditions);
  };

  return {
    conditions,
    setConditions,
    getStringConditions,
    handleConditionChange,
    addCondition,
    removeCondition,
    exportConditionsXLSX: () => ExcelExport(conditions, 'conditions'),
  };
};

export default useConditions;
