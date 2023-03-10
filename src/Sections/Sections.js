import React from "react";
import './Sections.css';

export default function Section({ title, subtitle, dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1 className='section-h1'>{title}</h1>
                <div>{subtitle}</div>
            </div>
        </div>
    );
}