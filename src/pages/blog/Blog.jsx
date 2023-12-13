import { Cardtwo, GlobalLink } from "../../assets/assets"
import rasim1 from "../../components/img/Image.svg"
import rasim2 from "../../components/img/Image.png"
import Styles from "./Blog.module.css"
function Blog() {
    return (
        <div className={Styles.blog}>


            <div className={Styles.blog_left}>
                <div className={Styles.user}>
                    <img src={rasim1} alt="..." />
                    <p>Andrew Jonson</p>
                    <p>Posted on 27th January 2021</p>
                </div>
                <h1>Our internal <br /> process and <br /> longerm vision</h1>
                <br />
                <p>It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. The <br /> Maker is a decentralized. We aim to attain the</p>
            <GlobalLink specialClass={'sal'} text={'Read More'} to={'bloginner'} />
            </div>
            <div className={Styles.blog_right}>
<img src={rasim2} alt="w" />
            </div>
            {/* GlobalLinkbu battin hamma yog'da ishlateverasiz */}
        </div>
    )
}

export default Blog