import { useState, useEffect, useCallback } from 'react';

const useFetchTodos = () => {
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);

    const fetchTodos = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data);
        setLoading(false);
    }, [])

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);
    
    return { loading, todos, setTodos };
};

export default useFetchTodos;