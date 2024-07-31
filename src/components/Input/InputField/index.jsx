import React from 'react';
import {TextField} from "@mui/material";
import PropTypes from "prop-types";
import {Controller} from "react-hook-form";

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string
};

function InputField(props) {

    const {form, name, label} = props
    const {errors} = form.formState
    const hasError = errors.title

    return (
        <Controller
            name={name}
            control={form.control}
            render={({field: {onChange, disabled, value}}) => (
                <TextField fullWidth label={label} disabled={disabled} onChange={onChange} error={hasError}
                           value={value}
                           helperText={errors.title?.message}/>
            )}
        />
    );
}

export default InputField;