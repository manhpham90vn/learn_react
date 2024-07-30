import PropTypes from "prop-types";

const ColorBox = (props) => {
    const {color} = props
    return (
        <div style={{background: color, width: 100, height: 100}}></div>
    )
}

// định nghĩa props type
ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
}

export default ColorBox