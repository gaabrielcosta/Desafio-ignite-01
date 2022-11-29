import { Trash } from 'phosphor-react'
import { Task } from '../../types/Task'
import styles from './TaskCard.module.css'

type Props = {
  task: Task
  deleteTasks: (task: Task) => void
  handleActiveTask: (task: Task) => void
}

export default function TaskCard({ task, deleteTasks, handleActiveTask }: Props) {
  return (
    <div className={styles.taskContent}>
      <a>
        <div className={styles.taskAndCheckbox}>
          <input
            type="checkbox" 
            defaultChecked={task.isComplete} 
            onChange={() => handleActiveTask(task)}
          />
          <h4>{task.title}</h4>
        </div>
        <button onClick={() => deleteTasks(task)} title="Deletar tarefa">
          <Trash size={24} />
        </button>
      </a>
    </div>
  )
}
