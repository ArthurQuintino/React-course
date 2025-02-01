import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Prgramação",
      description:
        "Estudar Programação para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Prgramação",
      description:
        "Estudar Programação para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Prgramação",
      description:
        "Estudar Programação para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
  ]);
  
  function onTaskClick(taskId) {
    const newTask = tasks.map(task => {
      if(task.id === taskId){

        return{task, isCompleted: !task.isCompleted}
      }
      return task;
    })
    setTasks(newTask);
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tasks
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
        <AddTask />
      </div>
    </div>
  );
}
export default App;

// jsx mistura de JS e HTML
// As functions so podem retornar apenas um elemento

// States (Estado) serve para a interação com o usuario e atualizar coisas da pagina
