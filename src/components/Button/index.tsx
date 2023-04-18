import React, {FC} from 'react';
import "./Button.css";

type ButtonProps = {
    icon?: JSX.Element;
    text?: string;
    callback?: () => void;
    background?: string;
};

export const Button:FC<ButtonProps> = ({ icon, text, callback, background }) => {
    return (
        <button style={{backgroundColor: background}} onClick={callback} className="button">
            {icon && <span className="button-icon">{icon}</span>}
            <span className="button-text">{text}</span>
        </button>
    );
};

