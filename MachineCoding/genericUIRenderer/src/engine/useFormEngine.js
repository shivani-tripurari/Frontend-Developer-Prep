// form state, onChange handler, submit handler

import React, {useState} from "react";

const useFormEngine = () => {
    // form-state -> initial state is an object -> {field : value}
    const [formState, setFormState] = useState({});

    //handler functions
    //onChangeHandler gets field, value
    const onChangeHandler = (field, value) => {
        setFormState((prev) => ({...prev,
            [field] : value
         }))
    }
    //submit handler
    const onSubmit = () => {
        console.log("Form submitted ", formState);
    }

    return{
        formState,
        onChangeHandler,
        onSubmit
    }
}

export default useFormEngine;