export interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (taskId: string) => void;
    getTasks: () => Task[];
}
export interface Task {
    id: string;
    title: string;
    description: string;
}

class TaskContext implements TaskContextType {
    constructor(public tasks: Task[] = []) { this.tasks = tasks; }

    addTask(task: Task) {
        const stored = localStorage.getItem("tb_tasks");
        const tasks = stored ? JSON.parse(stored) : [];
        const taskExists = tasks.find((t: Task) => t.id === task.id);

        if (taskExists) {
            throw new Error("Task already exists");
        }
        tasks.push(task);
        localStorage.setItem("tb_tasks", JSON.stringify(tasks));
    }

    removeTask(taskId: string) {
        const stored = localStorage.getItem("tb_tasks");
        const tasks = stored ? JSON.parse(stored) : [];

        this.tasks = tasks.filter((task: Task) => task.id !== taskId);
        localStorage.setItem("tb_tasks", JSON.stringify(this.tasks));
    }

    getTasks() {
        const stored = localStorage.getItem("tb_tasks");
        const tasks = stored ? JSON.parse(stored) : [];
        return tasks;
    }
}


export { TaskContext };