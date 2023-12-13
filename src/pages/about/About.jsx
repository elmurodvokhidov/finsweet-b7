import React from 'react'
import Style from "./About.module.css"
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import img11 from './img/img11.png'
import img7 from './img/img7.png'
import img8 from './img/img8.png'
import img9 from './img/img9.png'
import img10 from './img/img10.png'



function About() {
    return (
        <div className={Style.about}>
            <div className={Style.section}>
                <div className={Style.section1}>
                    <h1>We value human, <br />
                        organizational,  and <br />
                        operational <br />
                        intelligence, not just <br />
                        artificial
                    </h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Aliquam leo odio, sagittis quis ornare quis.
                    </h5>
                    <button>Work With Us</button>
                </div>
                <img src={img1} className={Style.img1} alt="img" />
            </div>
            <div className={Style.section2}>
                <h2>The energy of a start-up <br />
                    combined with 30 years of <br />
                    experience
                </h2>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit <br />
                    amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo <br />
                    suscipit tellus et pellentesque.
                </h5>
            </div>
            <div className={Style.text}>
                <div className={Style.text1}>
                    <h1>15+</h1>
                    <h3>Awards received</h3>
                    <h5>Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscin. Curabitur <br />
                        sit amet eros elit et.
                    </h5>
                </div>
                <div className={Style.text1}>
                    <h1>500+</h1>
                    <h3>Clients served</h3>
                    <h5>Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscin. Curabitur <br />
                        sit amet eros elit et.
                    </h5>
                </div>
                <div className={Style.text1}>
                    <h1>34</h1>
                    <h3>Employees</h3>
                    <h5>Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscin. Curabitur <br />
                        sit amet eros elit et.
                    </h5>
                </div>
                <div className={Style.text1}>
                    <h1>130+</h1>
                    <h3>Custom solutions</h3>
                    <h5>Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscin. Curabitur <br />
                        sit amet eros elit et.
                    </h5>
                </div>
            </div>
            <div className={Style.section3}>
                <div className={Style.sections3}>
                    <h1>We want to get local <br />
                        identification in every <br />
                        corner of the world in this <br />
                        era of global citizenship.
                    </h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Curabitur sit amet eros blandit, hendrerit elit et, mattis <br />
                        purus. Vivamus commodo suscipit tellus et <br />
                        pellentesque.
                    </h5>
                </div>
                <img src={img2} alt="img" />
            </div>
            <div className={Style.text2}>
                <h1>Teamwork is the only <br />
                    way we work
                </h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros <br />
                    blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et <br />
                    pellentesque.
                </h5>
            </div>
            <div className={Style.img2}>
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
          
         
        </div>
    )
}

export default About