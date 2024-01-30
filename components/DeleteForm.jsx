'use client'

import { deleteTask } from "@/utils/actions"
import {useFormStatus} from 'react-dom'

const SubmitButton = () => {
  const {pending} = useFormStatus()
  return  <button className="btn btn-xs btn-error" disbaled={pending}>
    {pending? 'Pending...':'Delete'}
  </button>
}

const DeleteForm = ({id}) => {
  return (
    <form action={deleteTask}>
        <input type="hidden" name="id" value={id}/>
        <SubmitButton />
    </form>
  )
}

export default DeleteForm
