import { getData, saveData, removeData, config, generateId } from "../index.js";

export function addGoal({ title, targetAmount, savedAmount, deadline }) {
  const goal = {
    id: generateId(),
    title: title,
    targetAmount: targetAmount,
    savedAmount: savedAmount,
    deadline: deadline,
  };
  const data = getData(config.GOAL_KEY) || [];
  data.push(goal)
  saveData(config.GOAL_KEY, data);
}

export function getGoals() {
  return getData(config.GOAL_KEY) || [];
}
export function getGoal(id) {
  const data = getData(config.GOAL_KEY) || [];
  return data.find((ele) => ele.id === id);
}

export function editGoal(id, updateFields) {
  const allData = getData(config.GOAL_KEY) || [];
  const matchData = allData.map((data) => {
    if (data.id === id) {
        return {...data,...updateFields}
    }
    return data;
  });
  saveData(config.GOAL_KEY,matchData)
}
export function deleteGoal(id){
    const data = getData(config.GOAL_KEY) || [];
    const filteredData = data.filter(ele=>ele.id !== id)
    saveData(config.GOAL_KEY,filteredData)
}
