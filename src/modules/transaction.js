import {
  generateId,
  saveData,
  config,
  getData,
  removeData,
} from "../index.js";

export function addTransaction({ amount, description, category, date }) {
  const transaction = {
    id: generateId(),
    amount: amount,
    date: date,
    description: description,
    category: category,
  };
  const data = getData(config.TRANSACTION_KEY) || [];
  data.push(transaction);
  saveData(config.TRANSACTION_KEY, data);
  //   console.log(data);
}
export function getTransactions() {
   return getData(config.TRANSACTION_KEY) || []  ;

  

}
export function getTransaction(id){
  const data = getData(config.TRANSACTION_KEY) || []; 
  return data.find(ele=> ele.id=== id)
}
export function deleteTransaction(id) {
    
    const data = getData(config.TRANSACTION_KEY);
    const fData = data.filter(t => t.id !== id);
    saveData(config.TRANSACTION_KEY, fData);
}
export function editTransaction(id, updateFields) {
const data = getData(config.TRANSACTION_KEY)
const uData = data.map(d=>{
    if(d.id === id){
       return {...d,...updateFields}
        
    }return d;
})
saveData(config.TRANSACTION_KEY,uData)
  
}
// addTransaction()
