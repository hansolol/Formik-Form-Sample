import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';
function App() {const formik = useFormik({
  initialValues:{
    name:'',
    email:'',
    password:'',
  },
  onSubmit: values => {
    alert("Login Successful");
    console.log('form: ', values);
  },
  validate: values =>{
    let errors = {};
    if(!values.name) errors.name = 'Field required';
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.name)) {
      errors.name = 'Username should be an email.'
    };
    if(!values.email) errors.email = 'Required';
    if(!values.password) errors.password = 'Field Required';
    return errors;
  }
});
return (
  <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Name</div>
      <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
      {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null}
      
      <div>Email</div>
      <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
      
      <div>Password</div>
      <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
      {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}  
      
      <div><button id="submitBtn" type="submit">Submit</button></div>
    </form>
  </div>
);
}

export default App;
