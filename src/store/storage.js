export function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Error saving data:", e);
  }
}
export function getData(key) {
  const data = localStorage.getItem(key);

  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Error parsing data:", e);
      return null;
    }
  }

  return null;
}
export function removeData(key){
localStorage.removeItem(key)
}
export function clearData(){
    localStorage.clear();

}
