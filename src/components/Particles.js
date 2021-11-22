// import Particles from "react-tsparticles";
import Particles from "react-particles-js";

const AnimationBack = () => {
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 250,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 4,
                        "random": true,
                        "anim": {
                            "speed": 2,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": true
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 6,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 3
                        }
                    }
                }
            }} />
    );
};

export default AnimationBack;


