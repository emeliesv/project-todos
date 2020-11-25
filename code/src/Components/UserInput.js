import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { tasks } from '../Reducers/tasks'

import { Button } from '../library/Button'

//This will be sent to the array inside tasks.js

export const UserInput = () => {
  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      tasks.actions.addItem({
        taskInfo: {
            id: Date.now(),
          text: task,
          done: false,
        },
      })
    )
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder='Add task'
        onChange={(event) => setTask(event.target.value)}
        value={task}
      ></textarea>
      <Button type='submit'>Add Task</Button>
    </form>
  )
}
