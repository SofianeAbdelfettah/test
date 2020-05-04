import React from "react";
import { Field, reduxForm } from "redux-form";


const handleSubmit = value => {
  alert(JSON.stringify(value));
};

const UpdateProject = ({ handleSubmit }) => {
  
  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <div className="UpdateProject">
          <h1>FORM</h1>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="name" component="input" />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};


export default reduxForm({
    // a unique name for the form
    form: "contact",
    handleSubmit,
  })(UpdateProject);
