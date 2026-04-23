export function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Error saving data:", e);
    return false;
  }
}
export function getData(key, defaultValue = null) {
  const data = localStorage.getItem(key);

  if (data !== null) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Error parsing data:", e);
      return defaultValue;
    }
  }

  return defaultValue;
}
export function removeData(id) {
  try {
    localStorage.removeItem(id);
    return true;
  } catch (error) {
    console.error("Error delete data:", error);
    return false;
  }

}
export function clearData() {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error("Error clear data:", error);
    return false;
  }
}
