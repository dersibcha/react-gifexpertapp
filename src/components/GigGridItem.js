import React from 'react'

export const GigGridItem = ({id, title, url}) => {
    
    
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} key={id} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
