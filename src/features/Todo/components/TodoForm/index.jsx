import React from 'react';
import InputField from "../../../../components/Input/InputField";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const TodoForm = props => {

    const { onSubmit } = props

    const schema = yup.object().shape({
        title: yup.string().required('Please enter a title'),
    })

    const form = useForm({
        defaultValues: {
            title: ''
        },
        resolver: yupResolver(schema)
    })

    const handleSubmit = (values) => {
        onSubmit(values)
        form.reset()
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form}/>
        </form>
    );
};

TodoForm.propTypes = {};

export default TodoForm;