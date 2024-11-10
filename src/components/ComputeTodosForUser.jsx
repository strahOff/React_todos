import { useState, useEffect } from 'react';
import useFetchTodos from './FetchTodos';
import useFetchUsers from './FetchUsers';

function CountTodosFromUser() {
  const { todos } = useFetchTodos();
  const { users } = useFetchUsers();

  const [userTaskCounts, setUserTaskCounts] = useState({});

  useEffect(() => {
    if (todos.length > 0 && users.length > 0) {
      const counts = {};
      users.forEach((user) => {
        counts[user.id] = 0; 
      });

      todos.forEach((todo) => {
        counts[todo.userId]++;
      });

      setUserTaskCounts(counts);
    }
  }, [todos, users]);
  
  return userTaskCounts;
}

export default CountTodosFromUser; 