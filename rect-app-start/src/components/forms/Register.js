import React from 'react';
import useRegisterForm from '../../CustomFormHooks';
import { Form, Button } from 'semantic-ui-react';

const Register = () => {
    const register = () => {
        alert(`User Created!
        Name: ${inputs.firstName} ${inputs.lastName}
        Email: ${inputs.email}`);
    }
    const {inputs, handleFieldChanges, handleSubmit} = useRegisterForm(register);

    return (
    <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label>First Name</label>
        <input type="text" name="firstName" placeholder="First Name" value={inputs.firstName} onChange={handleFieldChanges} required/>
        </Form.Field>
        <Form.Field>
        <label>Last Name</label>
        <input type="text" name="lastName" placeholder="Last Name" value={inputs.lastName} onChange={handleFieldChanges}/>
        </Form.Field>
        <Form.Field>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email Id" value={inputs.email} onChange={handleFieldChanges} required/>
        </Form.Field>
        <Form.Field>
        <label>Mobile Number</label>
        <input type="tel" name="mobile" placeholder="123-456-2165" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={inputs.mobile} onChange={handleFieldChanges} required/>
        </Form.Field>
        <Form.Field>
        <label>Password</label>
        <input type="password" name="password" placeholder="*******" value={inputs.password} onChange={handleFieldChanges}/>
        </Form.Field>
        <Button primary type="submit">Sign-up</Button>
    </Form>
    );
}

export default Register;