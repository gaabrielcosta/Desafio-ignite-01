import { Header } from './components/Header/Header'
import { Input } from './components/Input/Input'
import { TaskList } from './components/TaskList/TaskList'

import './global.css'
import { Task } from './types/Task'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

export function App() {
  const initialTasks = [
    {
      id: uuidv4(),
      title: 'Estudar',
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: 'Academia',
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: 'Cozinhar',
      isComplete: true,
    },
  ]

  const [tasks, setTasks] = useState(initialTasks)

  function handleCreateNewTask(task: Task) {
    setTasks([...tasks, task])
    console.log(tasks)
  }
  function deleteTasks(task: Task) {
    setTasks(tasks.filter((taskItem) => taskItem.id !== task.id))
  }

  function handleActiveTask(task: Task) {
    const tasksNew = tasks
    let taskFound = tasksNew.filter((taskItem) => {
      if (taskItem.id === task.id) taskItem.isComplete = !taskItem.isComplete
    })
    console.log(tasksNew)
    setTasks(tasksNew)
    console.log(tasks)
    // taskFound!.isComplete = !taskFound?.isComplete
  }

  return (
    <div>
      <Header />

      <Input handleCreateNewTask={handleCreateNewTask} />
      
      <TaskList
        tasks={tasks}
        deleteTasks={deleteTasks}
        handleActiveTask={handleActiveTask}
      />
    </div>
  )
}
