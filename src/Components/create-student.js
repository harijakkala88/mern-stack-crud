import React,{useState, useEffect} from "react";
import axios  from "axios";
import StudentForm from "./StudentForm";

//CreateStudent Component
const CreateStudent = () => {
     const [formValues, setFormValues] = 
           useState({name: '', email: '', rollno:''})
//onSubmit handler
 const onSubmit = studentObject => {
     axios.post (
         'http://localhost:4000/students/create-student', 
    studentObject)
      .then(res => {
          if(res.status === 200)
             alert('student successfully created')
             else 
              Promise.reject();
      })
        .catch(err => alert('Somthing went wrong'))
 }

    return(
        <StudentForm initialValues={formValues}
                 onSubmit={onSubmit}
                 enableReinitialize>
                     CreateStudent
                 </StudentForm>
    )  

}
export default CreateStudent;