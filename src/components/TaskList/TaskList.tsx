import styles from './TaskList.module.css'
import TaskCard from '../TaskCard/TaskCard'
import { Task } from '../../types/Task'

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
          <span>Concluidas</span>
          <span>
            {tasks.filter((task) => task.isComplete === true).length} de{' '}
            {tasks.length}
          </span>
        </div>
      </div>
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
    </div>
  )
}
