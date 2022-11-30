import styles from './TaskList.module.css'
import TaskCard from '../TaskCard/TaskCard'
import { Task } from '../../types/Task'
import { ClipboardText } from 'phosphor-react'

type Props = {
  tasks: Array<Task>
  deleteTasks: (task: Task) => void
  handleActiveTask: (task: Task) => void
}

export function TaskList({ tasks, deleteTasks, handleActiveTask }: Props) {
  return (
    <div>
      <div className={styles.taskHeader}>
        <div>
          <span className={styles.tasksCreated}>Tarefas</span>
          <span>{tasks.length}</span>
        </div>
        <div>
          <span className={styles.taskComplete}>Concluidas</span>
          <span>
            {tasks.filter((task) => task.isComplete === true).length} de{' '}
            {tasks.length}
          </span>
        </div>
      </div>
      {tasks.length > 0 ? (
        <div className={styles.taskContent}>
          {tasks.map((task) => (
            <TaskCard
              task={task}
              key={task.id}
              deleteTasks={deleteTasks}
              handleActiveTask={handleActiveTask}
            />
        ))}
      </div>
      ) : (
        <div className={styles.taskList}>
          <ClipboardText size={56} className={styles.clipboard} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </div>
  )
}
