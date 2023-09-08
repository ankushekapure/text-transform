import React from 'react'
import './Alert.css'

function Alert(props) {

    // Function to capatalize alert type text
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        <>
            {props.alert && <div className="alert" role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : <strong>{capitalize(props.alert.msg)}</strong>
            </div>}
        </>
    )
}

export default Alert