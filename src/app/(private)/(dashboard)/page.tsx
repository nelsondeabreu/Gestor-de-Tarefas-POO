"use client";
import { Task } from "@/app/context/TaskContext";
import { getTasks } from "@/app/hooks/useTask";

export default function Dashboard() {
  return (
    <div>
      <section className="sidebar w-72 border ">
        side nav bar
      </section>
      <header>
        <h1>Dashboard - Área Privada</h1>
      </header>
      <main>
        <h1>Dashboard - Área Privada</h1>
        <p>Bem-vindo à sua área privada!</p>
        <h2>Suas Tarefas</h2>
        <ul>
          {getTasks().map((task: Task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <p>© 2023 - Seu App de Tarefas</p>
      </footer>
    </div>
  );
}
