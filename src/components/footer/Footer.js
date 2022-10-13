
import styles from "./Footer.module.scss"
function Footer() {
    return (
        <footer>
        <div className={styles.sns}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="xi-kakaotalk"></i>
        </div>
            <div className={styles.footer_inner}>
                <div className={styles.service_list}>
                <ul>
                    <li>서비스이용약관</li>
                    <li>UCC 이용약관</li>
                    <li>개인정보처리방침</li>
                    <li>영상정보처리방침</li>
                    <li>뷰티포인트</li>
                    <li>사이트맵</li>
                    <li>LANGUAGE 한국/영어</li>
                </ul>
                    <p className={styles.footer_p}>고객상담팀(수신자요금부담) 080-023-5454 <span>(상담시간 월~금 AM 09:00 ~ PM 06:00)</span></p>
                <p className={styles.footer_p}>© AMOREPACIFIC CORPORATION. All rights reserved. </p>
            </div>
        </div>


    </footer>
    )
}


export default Footer