// import prisma from '@/utils/db'
// import {revalidatePath} from 'next/cache'
import { createTask } from "@/utils/actions"

// const createTask = async (formData) => {
    // 'use server';
    // const content = formData.get('content');
    // await prisma.task.create({
    //     data: {
    //         content,
    //     }
    // });
    // revalidatePath('/tasks')
// }

const TaskForm = () => {
  return ( <form action={createTask}>
    <div className="join w-full">
     <input type="text" className="input input-bordered join-item w-full"
      placeholder="type here.." name="content" required/>
    </div>
    <button type="submit" className="btn btn-primary join-item my-4">Create Task</button>
  </form> )
}

export default TaskForm
