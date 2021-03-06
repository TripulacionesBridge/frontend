import React from 'react';
import './BtnSkip.css';

export const BtnSkip = ({action, text, cssClass}) => {
    
    return (
        <button className={cssClass} 
        type="button" 
        onClick={action}>
            {text}
        </button>
    )
}
