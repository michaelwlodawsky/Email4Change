import React from 'react'


export default function ListButton({list, removeElement, name}) {
    const elementRemove = event => {
        console.log(event.target)
        removeElement(event)
    }

    return (
        <div>
            {list.map((item, index) => (
                <button 
                key={index}
                value={index} 
                name={name}
                type="button"
                style={{
                    minHeight: "30px",
                    minWidth: "100px"
                }}
                onClick={elementRemove}>
                    {item}
                </button>
            ))}
        </div>
        
    )
}