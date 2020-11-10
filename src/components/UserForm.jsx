import React, { useState } from 'react';


const UserForm = (props) => {
    const {inputs, handleChange, handleSubmit} = props;




    return (
        <>
        <form className="col-m5 mx-auto my-5" onSubmit={handleSubmit}>
            <div className="form-group">
                <label for ="formGroup">First Name</label>
                <input type="text" className="form-control" name="firstName" value = {inputs.firstName} onChange = {handleChange}/>
                <span className="text-danger">{inputs.firstName.length > 2 ? " " : "First Name must be at least 2 characters."}</span>
            </div>
            <div className="form-group ">
                <label>Last Name</label>
                <input type="text" className="form-control" name="lastName" value = {inputs.lastName} onChange = { handleChange}/>
                <span className="text-danger">{inputs.lastName.length > 2 ? " " : "Last Name must be at least 2 characters."}</span>
            </div>
            <div className="form-group">
                <label for ="formGroup">Email</label>
                <input type="text" className="form-control" name="email" value = {inputs.email} onChange = { handleChange}/>
                <span className="text-danger">{inputs.email.length > 5 ? " " : "Email must be at least 5 characters."}</span>
            </div>
            <div className="form-group">
                <label for ="formGroup">Password</label>
                <input type="password" className="form-control" name="password" value = {inputs.password} onChange = { handleChange}/>
                <span className="text-danger">{inputs.password.length > 8 ? " " : "Password must be at least 8 characters."}</span>
            </div>
            <div className="form-group">
                <label for ="formGroup">Confirm Password</label>
                <input type="password" className="form-control" name="confPassword" value = {inputs.confPassword} onChange = { handleChange}/>
                <span className="text-danger">{inputs.confPassword === inputs.password ? " " : "Password must match"} </span>
            </div>
        </form>
        </>


    );
        }



    


    

export default UserForm;

