import React from 'react';
import useLoginForm from '../../CustomFormHooks';
import { Form, Button } from 'semantic-ui-react';

const LoginForm = () => {
    const loggedin = () => {
        alert(`User LoggedIn!
        Email: ${inputs.loginemail}`);
    }
    const {inputs, handleFieldChanges, handleSubmit} = useLoginForm(loggedin);

    return (
    <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label>Email</label>
        <input type="email" name="loginemail" placeholder="express@motercorp.com" value={inputs.loginemail} onChange={handleFieldChanges} required/>
        </Form.Field>
        <Form.Field>
        <label>Password</label>
        <input type="password" name="loginpassword" placeholder="*******" value={inputs.loginpassword} onChange={handleFieldChanges}/>
        </Form.Field>
        <Button primary type="submit">Login</Button>
    </Form>
    );
}

export default LoginForm;