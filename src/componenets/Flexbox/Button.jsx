import React from 'react';
import './button.scss'

export default function Button(props) {
    const { text } = props;
    return (
        <div className='flexbtn'>
            <button className="btn btn-outline-light">{text}</button>
        </div>
    )
}
