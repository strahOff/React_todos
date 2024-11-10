import { useState, useEffect, useCallback } from 'react';

const useFetchUsers = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
    }, [])

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return { loading, users, setUsers };
};

export default useFetchUsers;