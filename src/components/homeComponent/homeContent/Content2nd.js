import React from 'react';

const Content2nd = ({ icon, title, content, classN, classIcon, slide }) => {
    return (
        <div className={classN} style={slide}>
            <div className={classIcon}>
                <i className={icon}></i>
            </div>
            <h2>{title}</h2>
            <h4>{content}</h4>
        </div>
    )
}

export default Content2nd
