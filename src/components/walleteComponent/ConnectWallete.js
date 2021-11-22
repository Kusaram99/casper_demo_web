import React, { useState, useEffect } from 'react'
import './ConnectWallete.css';
import AnimationBack from '../Particles';

const ConnectWallete = () => {
    const [particle, setParticle] = useState(null);

    useEffect(() => {
        setParticle(true);
    }, []);
    return (
        <header className="connect_header" >
            {particle && <AnimationBack />}
            <div className="title_div">
                <div className="title">
                    <h1 style={{ color: "yellow" }}>This feature is coming soon.</h1>
                </div>
            </div>
        </header>
    )
}

export default ConnectWallete;
