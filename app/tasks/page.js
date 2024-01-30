// import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";

const TasksPage = () => {
    return (
        <div>
            {/* <TaskForm /> */}
            <TaskFormCustom />
            <h1 className="text-5xl mt-8 font-mono decoration-amber-400	">My Tasks</h1>
            <TaskList />
        </div>
    );
};

export default TasksPage