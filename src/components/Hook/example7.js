import React from 'react';
import PropTypes from "prop-types";

const Example7 = (props) => {

    const {name} = props

    console.log('render Example7', name)

    return (
        <div>
            Hello World! {name}
        </div>
    );
};

Example7.prototypes = {
    name: PropTypes.string
}

Example7.defaultProps = {
    name: ''
}

export default React.memo(Example7);