// eslint-disable-next-line
import React, {useState} from 'react';

const useRegisterForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleFieldChanges = (event) => {
        event.persist();
        setInputs(inputs =>({...inputs,[event.target.name]:event.target.value}));
    }
    const handleSubmit = (event) => {
        if(event){
            event.preventDefault();

            const data = new FormData(event.target);
            fetch('./components/images',{
                method: 'POST',
                body: JSON.stringify(data)
            });
            console.log(JSON.stringify(data.keys));
            console.log(data.get('firstName'));
            callback();
        }
    }
    return{
        handleSubmit,
        handleFieldChanges,
        inputs
    };
}

const useLoginForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleFieldChanges = (event) => {
        event.persist();
        setInputs(inputs =>({...inputs,[event.target.name]:event.target.value}));
    }
    const handleSubmit = (event) => {
        if(event){
            const data = new FormData(event.target);
            fetch('./components/images',{
                method: 'POST',
                body: JSON.stringify(data)
            });
            console.log(data.get('firstName'));
            callback();
        }
    }
    return{
        handleSubmit,
        handleFieldChanges,
        inputs
    };
}
export default useRegisterForm;
export {useLoginForm};