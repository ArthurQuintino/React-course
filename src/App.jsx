import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description:
        "Estudar Programação para se tornar um desenvolvedor Full Stack",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Comer pão de queijo",
      description:
        "Estudar Programação para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Batata",
      description:
        "Estudar Programação para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }; // TRES PONTINHOS DESGRAMENTOS
      }
      return task;
    });
    setTasks(newTask);
  }

  function deleteOnClick(taskId) {
    const newTasks = tasks.filter((task) => taskId !== task.id); // filter serve para deletar aonde atender a condição é favorecida
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTasks = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false


    }
    setTasks([...tasks, newTasks])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tasks
        </h1>
        <br></br>
        <AddTask  
        onAddTaskSubmit={onAddTaskSubmit}
        />
        <br></br>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteOnClick={deleteOnClick}
        />
      </div>
    </div>
  );
}
export default App;

// jsx mistura de JS e HTML
// As functions so podem retornar apenas um elemento

// States (Estado) serve para a interação com o usuario e atualizar coisas da pagina
