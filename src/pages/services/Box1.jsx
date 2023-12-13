import Styles from "./Services.module.css"



export function Box1({rasm,rasm1,text,text1, btn}) {
    return (
        <div className={Styles.box}>
            <div className={Styles.tepa}>
                <div className={Styles.chap}>
                    <h2 className={Styles.h2}>{text}</h2>
                    <p className={Styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                    {btn && <button className={Styles.btn}>Work With Us</button>}
                </div>
                <div className={Styles.right}>
                    <img className={Styles.img} src={rasm} alt="" />
                    
                </div>

            </div>
            <div className={Styles.pass}>
                <div className={Styles.left}>
                    <img  className={Styles.img1} src={rasm1} alt="" />
                    {/* <div  className={Styles.chiziq}>

                    </div> */}
                </div>
                <div className={Styles.ong}>
                    <h2 className={Styles.h}>{text1}</h2>
                    <p className={Styles.pp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                    <ul>
                        <li className={Styles.l}>Cost strategy</li>
                        <li>Differentiated product or service strategy</li>
                        <li>Focus on a niche strategy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}