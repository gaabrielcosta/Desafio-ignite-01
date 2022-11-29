import styles from './Input.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Task } from '../../types/Task'
import { v4 as uuidv4 } from 'uuid' 

type Props = {
  handleCreateNewTask: (task: Task) => void
}


export function Input({ handleCreateNewTask }: Props) {
  const [title, setTitle] = useState('')
 
  
  return (
    <div>
      <form

        
        className={styles.inputContent}
      >
        <input
          onChange={(event) => setTitle(event.target.value)}
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
        ></input>

        <button 
          onClick={(event) => {event.preventDefault(); handleCreateNewTask({
            id: uuidv4(),
            isComplete: false,
            title: title,
          })}}>
            <p>Criar</p>
            <PlusCircle color="#F2F2F2" size={20} />
        </button>
      </form>
    </div>
  )
}
