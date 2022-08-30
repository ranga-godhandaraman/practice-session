import React, {useState, useEffect} from "react";
import axios from "axios";


function EditEmployeeForm(props){
    const [emp, setemp]= useState({EmpID: '', Name:'', Email:'', Gender:''})
    const Url="https://gorest.co.in/public/v2/users" + props.match.params.id;

    useEffect(()=> {
        const GetData = async () => {
            const result = await axios(Url);
            setemp (result.data);

        };
        GetData();
    },
    [] );
    // const deleteEmp = (id) => {  
    //     debugger;  
    //     axios.delete( 'https://gorest.co.in/public/v2/users' + id)  
    //       .then((result) => {  
    //         props.history.push('/List')  
    //       });

    // const UpdateEmp = (e) =>{
    //     e.preventDefault();
    //     const data = { Id:props.match.params.id,EmpID:emp.id,Name:emp.name, Email:emp.email, Gender: emp.gender }
    //     .then ((result) =>{
    //         props.history.push("/List")
    //     });
    // };

return(
    <div>
        <form>
            <label>Emp.Id</label>
            <input className="u-full-width" type="text" name="Emp.Id" value={emp.id} />
            
            <label>Name</label>
            <input className="u-full-width" type="text" name="Name" value={emp.name} />
           
            <label>E-Mail</label>
            <input className="u-full-width" type="text" name="Email" value={emp.email} />
           
            <label>Gender</label>
            <input className="u-full-width" type="text" name="Gender" value={emp.gender} />
            
            {/* <button className="button-primary" onClick={()=>{deleteEmp(emp.id)}}>Delete</button> */}
        </form>
    </div>
)
}
export default EditEmployeeForm;