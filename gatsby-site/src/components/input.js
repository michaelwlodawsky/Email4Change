import React from "react"

export default function Input(props) {
    return (
        <div style={{
            maxWidth: '500px',
            display: 'inline-block'
        }}>
            <label for={props.id}>{props.label}</label>
            <input id={props.id}></input>
        </div>
    )
}