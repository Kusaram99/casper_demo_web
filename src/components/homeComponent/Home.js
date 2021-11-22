import React, { useState, useEffect } from 'react';
import './Home.css';
import Content1st from './homeContent/Content1st';
import Content2nd from './homeContent/Content2nd';
import PersentageSec1st from './homeContent/PersentageSec1st';
import PersentageSec2nd from './homeContent/PersentageSec2nd';
import { ImageDATA } from '../../Images/ImageDATA';
import AnimationBack from '../Particles';


const Home = () => {
    // animation state
    const [slideContent, setSlideContent] = useState({left: "-47px",opacity: 0.5});
    const [home_page_2nd, setHome_page_2nd] = useState({left: "-69px",opacity: 0.5});
    const [persenTage, setPersenTage] = useState({
        persent:{left: "-39px",opacity: 0.5}, 
        persentAfter:{width:"100%"}
    });

    const [parcticle, setParticle]=useState(null);
    const slidTitle = (num) => {
         setParticle(num);
        }

    // console.log("scrolled : ", window.pageYOffset);

    // Slide Component content as Scroll control
    window.onscroll = () => {
        if (window.pageYOffset === 250 || 250 <= window.pageYOffset) {
            setSlideContent({left: "0", opacity: 1});
        }else{setSlideContent({left: "-47px",opacity: 0});}

        if(window.pageYOffset === 1350|| 1250 <= window.pageYOffset){
            setHome_page_2nd({left: "0px",opacity:1})
        }else{setHome_page_2nd({left: "-69px",opacity: 0})}

        if(window.pageYOffset === 1800|| 1850 <= window.pageYOffset){
            setPersenTage({persent:{left: "0",opacity: 1},persentAfter:{width:"100%"}})
        }else{ setPersenTage({persent:{left: "39px",opacity:0},persentAfter:{width:"10%"}})}
    }

    // end animation state

    useEffect(() => {
        slidTitle(true);
    }, [])
    return (
        <>
            <header>
                    {parcticle&&<AnimationBack/>}
                <div className="main_bg_title">
                    <h1>
                        <span style={{ color: "#6239f2" }}>CasperPad</span> is the first
                        <br/> official decentralized
                        <br/>Launchpad built to 
                        <br/>launch next level <br/>projects on the <br/>Casper Network.
                    </h1>
                </div>
            </header>
            <div className="main_container">
                <div className="Home_page_1st">
                    {/* content 1st */}
                    <div className="title_content">
                        <Content1st
                            title="Who We are"
                            content="We are the first key to the Casper Network Ecosystem. Once we unlock this door, projects can start launching on the Casper Network through our extensive IDO network."
                            slide={slideContent}
                        />
                        <Content1st
                            title="Who We are"
                            content="We are the first key to the Casper Network Ecosystem. Once we unlock this door, projects can start launching on the Casper Network through our extensive IDO network."
                            slide={slideContent}
                        />
                    </div>

                    {/* content 2nd */}
                    <div className="content_boxes" >
                        <div className="box_1">
                            <Content2nd
                                classN="content2nd_boxe"
                                classIcon="icon_div"
                                icon='fas fa-vote-yea'
                                title="Casper-supported Lounchpad"
                                content="We will be the first Launchpad that is supported by its own Blockchain."
                                slide={slideContent}
                            />
                        </div>
                        <div className="box_2">
                            <Content2nd
                                classN="content2nd_boxe2"
                                classIcon="icon_div_2"
                                icon='fas fa-vote-yea'
                                title="Fair Allocation System"
                                content="WWe believe in decentralization and understand that there are investors with different needs."
                                slide={slideContent}
                            />
                        </div>
                        <div className="box_3">
                            <Content2nd
                                classN="content2nd_boxe"
                                classIcon="icon_div"
                                icon='fas fa-vote-yea'
                                title="Strict Launch System"
                                content="We go through each application in detail to understand their needs and if they apply to our community wants."
                                slide={slideContent}
                            />
                        </div>
                    </div>
                </div>

                {/* Home page 2nd */}
                <div className="Home_page_2nd"  style={home_page_2nd} >
                    <div className="page_2nd_content_1st">
                        <h1>
                            CasperPad
                            <br />
                            Allocation
                            <br />
                            System
                        </h1>
                    </div>
                    <div className="page_2nd_content_2nd" style={home_page_2nd}>
                        <h1>
                            There will be<br />
                            lottery, and<br />
                            guaranteed Tiers!
                        </h1>
                        <h4>
                            We are working on developing a hybrid model that will make the launch as decentralized as possible.
                        </h4>
                    </div>
                </div>
            </div>
            {/* TOKONOMICS SECTION */}
            <section className="section_1st">
                <h1>TOKENOMICS</h1>
                <div className="tokonomic_section_1st">
                    <PersentageSec1st slide={persenTage}/>
                    <PersentageSec1st slide={persenTage}/>
                    <PersentageSec1st slide={persenTage}/>
                    <PersentageSec1st slide={persenTage}/>
                </div>
                <div className="tokonomic_section_2st">
                    <PersentageSec2nd slide={persenTage}/>
                    <PersentageSec2nd slide={persenTage}/>
                    <PersentageSec2nd slide={persenTage}/>
                </div>
            </section>

            {/* SECTION - 2 */}
            <section className="section_2">
                <div className="section_2_1st_div">
                    <h1>Supported By</h1>
                    <p><img src={ImageDATA.casper_logo} alt="S_logo" /></p>
                </div>
                <div className="section_2_2nd_div">
                    <h1>Our Partners & Investors</h1>
                </div>
                <div className="section_2_3rd_div">
                    <img src={ImageDATA.footer_logo_2} alt="f_logo2" />
                </div>
                <div className="section_2_4th_div">
                    <div className="1st_logo">
                        <img src={ImageDATA.group_logo_1st} alt="group_logo" />
                    </div>
                    <div className="2nd_logo">
                        <img src={ImageDATA.group_logo_2nd} alt="group_logo" />
                    </div>
                    <div className="3rd_logo">
                        <img src={ImageDATA.group_logo_3rd} alt="group_logo" />
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;
