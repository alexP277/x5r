import React, { useState } from "react";
import './Tooltip.css';

interface Props {
    text: string;
    children: React.ReactElement;
}

export const Tooltip: React.FC<Props> = ({ text, children }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="tooltip" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            {children}
            {show && <span className="tooltip-text">{text}</span>}
        </div>
    );
};

