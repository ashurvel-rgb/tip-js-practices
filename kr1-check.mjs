import { demoTasks } from "./practice-02/src/data.js";
import { getPendingTasks } from "./practice-02/src/task-service.js";

console.log(
  "Невыполненные задачи из demoTasks:",
  getPendingTasks(demoTasks).map(task => task.id)
);
console.log("Для пустого массива:", getPendingTasks([]));