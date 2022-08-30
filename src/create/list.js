import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import EditEmployeeForm from '../operations/editemployee';
import './list.css';

function List() {

    const [employees, setEmployees] = useState([]);

    React.useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/users')
            .then(function (res) {
                console.log(res.data);
                setEmployees(res.data);
            })
    }, []);

    // const editemployee= (id)=> {
    //     propTypes.history.push(
    //         {pathname:'/edit/'+ id}
    //     );
        
    // };
    return (
        <div>
             <table>
                <tr>
                    <th>Emp.ID </th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Gender</th>
                </tr>
                {employees.map((emp, i) => {
                    return <tr key={i}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.gender}</td>
                        <td>
                            <div>
                                {/* <Button onClick={ ()=> {editemployee(emp.id)}}> Edit </Button> */}
                            </div>
                        </td>
                    </tr>
        
                })}
            </table>
            
        </div>
        
    )
}

export default List;