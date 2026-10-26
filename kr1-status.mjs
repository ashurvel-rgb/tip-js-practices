import { demoTasks } from "./practice-02/src/data.js";
import { setTaskCompleted } from "./practice-02/src/task-service.js";

const before = JSON.stringify(demoTasks);
const result = setTaskCompleted(demoTasks, 4, true);
console.log("Проверка: id = 4, completed = true");
console.log("Успех:", result.ok);
if (result.ok) {
  console.log("Статус в исходном массиве:", demoTasks.find(task => task.id === 4).completed);
  console.log("Статус в новом массиве:", result.tasks.find(task => task.id === 4).completed);
}
console.log("");
console.log("Проверка: id = 777, completed = true");
console.log(setTaskCompleted(demoTasks, 777, true));
console.log("Исходные данные не изменились:", JSON.stringify(demoTasks) === before);