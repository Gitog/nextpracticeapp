'use client'
// import prisma from '@/utils/db'
// import {revalidatePath} from 'next/cache'
// import { createTask } from "@/utils/actions"
import { createTaskCustom } from "@/utils/actions"
import { useEffect } from "react"
import { useFormStatus,useFormState} from  'react-dom'
import toast from 'react-hot-toast';

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

const SubmitBtn = () => {
  const {pending} = useFormStatus()
  return (
    <button type="submit" className="btn btn-primary join-item my-4"
    disabled={pending}>
      {pending?  'Please wait...': 'Create Task'}
    </button>
  )
}

const initialState = {
  message: null,
}

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(()=>{
    if(state.message === 'error'){
      toast.error("There was an Error")
      return
    }
    if (state.message){
      toast.success('Task Created')
    }

  },[state])
  return ( <form action={formAction}>
    {state.message ? <p className="mb-2">{state.message}</p> : null}
    <div className="join w-full">
    <input type="text" className="input input-bordered join-item w-full"
      placeholder="type here.." name="content" required/>
    </div>
  <SubmitBtn />
  </form> )
}

export default TaskForm
