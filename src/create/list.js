import axios from 'axios';
import React, { useState } from 'react';
import './list.css';

function List() {
    
    const [employees, setEmployees] = useState([]);

    React.useEffect(()=>{
        axios.get('https://gorest.co.in/public/v2/users')
        .then(function (res) {
            console.log(res.data);
            setEmployees(res.data);
        })    
    },[]);

    return (
        <div>
            <table>
                <tr>
                    <th>Emp.ID </th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Gender</th>
                    <th>Status</th>
                </tr>
                {employees.map((emp,i) => {
                    return <tr key={i}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.status}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default List; 