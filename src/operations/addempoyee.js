import React, {useState} from 'react';

const AddEmployeeForm = (props) => {

    const initUser = {id: null, EmpID: '', Name: '',Email: '',Gender: ''};

    const [emp, setEmp] = useState(initUser);

    const handleChange = e => {
        const {emp, value} = e.target;
        setEmp({...emp, [emp]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ( emp.id && emp.id) {
           handleChange(e, props.addEmp(emp));
        }
    }
    

    return (
        <form>
            <label>Emp.Id</label>
            <input className="u-full-width" type="text" name="Emp.Id" value={emp.id} />
            
            <label>Name</label>
            <input className="u-full-width" type="text" name="Name" value={emp.name} />
           
            <label>E-Mail</label>
            <input className="u-full-width" type="text" name="Email" value={emp.email} />
           
            <label>Gender</label>
            <input className="u-full-width" type="text" name="Gender" value={emp.gender} />
            
            <button className="button-primary" type="submit">Add user</button>
        </form>
    )
}

export default AddEmployeeForm;