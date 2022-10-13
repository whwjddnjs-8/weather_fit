import cloudy from '../../images/cloudy.png';
import chat from '../../images/chat.png';
import cloth_hanger from '../../images/clothes-hanger.png';
import umbrella from '../../images/umbrella.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Introduction.module.scss'
  
function Introduction() {
    AOS.init();
    return (
        <div className={styles.introduction}>
            <div className={styles.intro} data-aos="fade-down" data-aos-duration="1000">
                <img src={cloudy} />
                <p>실시간으로 날씨를 확인해요! <span>지금 내가 위치한 곳의 기온이 궁금하다면? Weather Fit!</span></p>
            </div>
            <div className={styles.intro} data-aos="fade-down" data-aos-duration="2000">
                <img src={cloth_hanger} />
                <p>날씨에 적합한 옷 추천을 확인해요! <span>도대체 뭘입어야 적당할지 모르겠다면? Weather Fit!</span></p>
            </div>
            <div className={styles.intro} data-aos="fade-down" data-aos-duration="3000">
                <img src={umbrella} />
                <p>비 맞을 일 없을거예요! 오늘 비가 올 확률은?   <span>우산 가지고 갈아 말아? Weather Fit이 알려줄게요</span></p>
            </div>
            <div className={styles.intro} data-aos="fade-down" data-aos-duration="4000">
                <img src={chat} />
                <p>우리지역 지금 날씨가 어때? 알려줘! <span>주변 사람들의 생생한 날씨를 듣고 싶을땐? Weather Fit!</span></p>
            </div>
        </div>
    )
}

export default Introduction