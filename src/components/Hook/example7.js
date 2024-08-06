import React from 'react';
import PropTypes from "prop-types";

const Example7 = (props) => {

    const {name, onClick} = props

    console.log('render Example7', name)

    return (
        <div onClick={onClick}>
            Hello World! {name}
        </div>
    );
};

Example7.prototypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
}

Example7.defaultProps = {
    name: '',
    onClick: null
}

export default React.memo(Example7);