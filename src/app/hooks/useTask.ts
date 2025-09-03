import { Task, TaskContext } from "../context/TaskContext";

const useTask = new TaskContext();

export function addTask(task: Task) {
    useTask.addTask(task);
}

export function removeTask(taskId: string) {
    useTask.removeTask(taskId);
}

export function getTasks() {
    return useTask.getTasks();
}
export { useTask };