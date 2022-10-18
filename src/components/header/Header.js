import logo from "../../images/logo2.png"
import styles from "./Header.module.scss"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function Header() {
    return (
        <header>
            <div className={styles.header_wrapper}>
                <Link to="/"><img src={logo} /></Link>
                <ul>
                    <Link to="/"><li>STORY</li></Link>
                    <li>WEATHER FIT</li>
                    <Link to="/community"><li>COMMUNITY</li></Link>
                </ul>
                <i className="xi-map-o"></i>
            </div>
        </header>
    )
}

{/* <header>
            <div className={styles.text_box}>
                <svg width={1200} height={200} viewBox="130 -50 525 160">
                    <text x="0" y="50%">W</text>
                    <text x="170" y="50%">e</text>
                    <text x="225" y="50%">a</text>
                    <text x="285" y="50%">t</text>
                    <text x="345" y="50%">h</text>
                    <text x="410" y="50%">e</text>
                    <text x="470" y="50%">r</text>
                    <text x="590" y="50%">F</text>
                    <text x="695" y="50%">i</text>
                    <text x="740" y="50%">t</text>
                </svg>
            </div>
            
        </header> */}
export default Header