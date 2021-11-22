import React from 'react'

const PersentageSec2nd = ({ slide }) => {
    return (
        <>
            <div className="Sect_2st_div">
                <div className="persentageSec_2st" style={slide.persent}>
                    <h1>5%</h1>
                    <p>Airdrops</p>
                </div>
                <div className="after_slide" style={slide.persentAfter}></div>
            </div>
        </>
    )
}

export default PersentageSec2nd
