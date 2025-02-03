import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="h-80 space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <h1 className=" w-64 bg-slate-500 text-white rounded-md shadow flex flex-col text-center">
          Titulo da Tarefa:
        </h1>
        <h1 className="w-64 bg-slate-400 text-white rounded-md shadow flex flex-col justify-normal p-1.5">
          {title}
        </h1>
        <h1 className=" w-64 bg-slate-500 text-white rounded-md shadow flex flex-col text-center">
          Descrição da Tarefa
        </h1>
        <p className="w-64 bg-slate-400 text-white rounded-md shadow flex flex-col justify-normal p-1.5">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TaskPage;
