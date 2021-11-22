import React from 'react'

const PersentageSec1st = ({ slide }) => {
    return (
        <>
            <div className="Sect_1st_div">
                <div className="persentageSec_1st" style={slide.persent}>
                    <h1>5%</h1>
                    <p>Airdrops</p>
                </div>
                <div className="after_slide" style={slide.persentAfter}></div>
            </div>
        </>
    )
}

export default PersentageSec1st
