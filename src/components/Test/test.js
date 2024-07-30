const TestRender = () => {
    const name = "Manh"
    const age = 33
    const nullObj = null
    const undefinedObj = undefined
    const isFemale = false
    const obj = {
        gender: "male",
    }
    const colors = ["red", "green", "blue"]
    return (
        <div>
            <p>Hello {name} - {age}</p>
            <p>{isFemale ? 'Female' : 'Male'}</p>
            {isFemale && 'Female Short'}
            <p>{nullObj ? 'null' : 'not null'}</p>
            <p>{undefinedObj ? 'undefined' : 'not undefined'}</p>
            <p>{obj.gender}</p>
            <ul>
                {colors.map(color => (<li style={{color: color}} key={color}>{color}</li>))}
            </ul>
        </div>
    )
}

export default TestRender