import useFetchUsers from "./FetchUsers";
import CountTodosFromUser from "./ComputeTodosForUser";

export default function TeachingSection() {


    const {loading, users, setUsers} = useFetchUsers();
    const userTaskCounts = CountTodosFromUser();

    return (
        <section>
            <p className="description">User task table for effective planning.</p>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <table>
                    <thead>
                        <tr>
                            <th className="HeaderTableId"><span style={{opacity: '0.3'}}>#</span></th>
                            <th className="HeaderTableUserName"><span style={{opacity: '0.3'}}>USERNAME</span></th>
                            <th className="HeaderTableCount"><span style={{opacity: '0.3'}}>TO-DO COUNT</span></th>
                        </tr>
                    </thead>
                    <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className="TableId">{user.id}</td>
                                    <td className="TableUserName">
                                        <div style={{display: "flex", alignItems: "flex-start"}}>
                                            <img src="../../public/Frame 26.svg" style={{marginRight: "16px"}} alt="todo" />
                                            <div>
                                                <p style={{fontSize: "16px", lineHeight: '19.36px', fontWeight: '500'}}>
                                                {user.name}
                                                </p>
                                                <p style={{fontSize: "12px", lineHeight: '14.52px', marginTop: '4px', opacity: "0.4"}}>
                                                {user.email}
                                                </p>
                                            </div>  
                                        </div>
                                                                                  
                                    </td>
                                    <td className="TebleCount">{userTaskCounts[user.id]}</td>
                                </tr>
                            ))}
                    </tbody>
                    </table>
                </>
            )}
        </section>
    )
}