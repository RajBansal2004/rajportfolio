import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
const Login=()=> {
    return (
        <>
            <Form>
                <Form.Control type="text" placeholder="Enter Your Name" />
                <Form.Control type="password" placeholder="Enter Your Password" />
            </Form>

        </>
    );
    
}
export default Login;