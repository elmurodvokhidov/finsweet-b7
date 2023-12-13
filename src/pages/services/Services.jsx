import Styles from "./Services.module.css"
import rasm1 from "./img1.png"
import rasm2 from "./img2.png"
import rasm3 from "./img3.png"
import rasm4 from "./img4.png"
import rasm5 from "./img5.png"
import rasm6 from "./img6.png"
import { Box1 } from "./Box1"
import {  GlobalQiz } from "../../assets/assets"
import { Cardtwo } from "../../assets/assets"
import iso from '../../components/img/image (2).png'
import iso2 from '../../components/img/image (3).png'
import iso3 from '../../components/img/image (4).png'
import iso4 from '../../components/img/icon (2).svg'


function Services() {
    return (
        <div className={Styles.servise}>
            <Box1 btn={true} rasm={rasm1} rasm1={rasm2} text={"We serve clients with ground breaking solutions"} text1={"Business strategy"}/>
            <Box1  rasm={rasm3} rasm1={rasm4} text={"Digitalization"} text1={"Risk assessment"}/>
            <Box1  rasm={rasm5} rasm1={rasm6}  text={"Artificial intelligence"} text1={"Smart Contracts"}/>
            <GlobalQiz />
           
        <div className="cardtwo" id={Styles.cardtwo} style={{background: "#DCEAF5",padding:"100px 0"}}>
          <Cardtwo id={'card'} rasm1={iso2} matn1={"Why you have to digitalize in 2021"} matn2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, "}  matn3={"Learn More "} rasm2={iso4}/>
          <Cardtwo id={'card'} rasm1={iso}  matn1={"Our internal process and longerm vision"} matn2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, "} matn3={"Learn More "} rasm2={iso4} />
          <Cardtwo id={'card'} rasm1={iso3} matn1={"Helping the next generation of leaders"}  matn2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, "}matn3={"Learn More "} rasm2={iso4} />
        </div>
               



        </div>
    )
}

export default Services
































































 {/* <div className={Styles.box}>
                <div className={Styles.tepa}>
                    <div className={Styles.chap}>
                        <h2 className={Styles.h5}>Digitalization</h2>
                        <p className={Styles.p3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis.</p>
                    </div>
                    <div className={Styles.rasm3}>

                    </div>

                </div>
                <div className={Styles.pass}>
                    <div className={Styles.rasm4}>
                        <div className={Styles.chiziq}>

                        </div>
                    </div>
                    <div className={Styles.ong}>
                        <h2 className={Styles.h}>Risk assessment</h2>
                        <p className={Styles.pp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                        <ul>
                            <li className={Styles.l}>Cost strategy</li>
                            <li>Differentiated product or service strategy</li>
                            <li>Focus on a niche strategy</li>
                        </ul>
                    </div>

                </div>

            </div>


            <div className={Styles.box}>
                <div className={Styles.tepa}>
                    <div className={Styles.chap}>
                        <h2 className={Styles.h0}>Finsweet was a dream to work with</h2>
                        <p className={Styles.p0}>Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.</p>


                        <div className={Styles.port}>
                            <div className={Styles.left}>
                                <div className={Styles.rasm10}></div>
                            </div>
                            <div className={Styles.right}>
                                <h6 className={Styles.h10}>Chikelu Neo</h6>
                                <p className={Styles.p10}>CEO at MazeAI</p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.rasm0}>
                        <div className={Styles.mute}>
                            <div className={Styles.orqa}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                                    <path d="M13 7.5L0.249999 14.8612L0.25 0.138783L13 7.5Z" fill="#F58A07" />
                                </svg>
                            </div>
                            <p className={Styles.pz}>play Video</p>
                        </div>
                    </div>

                </div>

    </div>*/}