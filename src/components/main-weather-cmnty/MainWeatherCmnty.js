import styles from "../../routes/Home.module.scss";

function MainWeatherCmmty() {
    return (
        <div className={styles.todays_weather_cmnty}>
              <h1>오늘 날씨 어때요?
                <span>자세히 보기 &gt;</span>
              </h1>
                <table>
                <caption>오늘의 날씨</caption>
                <colgroup>
                  <col width={'17%'}></col>
                  <col width={'auto'}></col>
                  <col width={'17%'}></col>
                  <col width={'17%'}></col>
                </colgroup>
                <thead>
                    <tr>
                    <th></th>
                  <th>글 제목</th>
                  <th>작성일자</th>
                  <th>작성자 닉네임</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className={styles.location}>서울</span>
                        </td>
                    <td><a href="#none" className={styles.new}>오늘 날씨 짱좋아요오늘 날씨 짱좋아요오늘 날씨 짱좋아요오늘 날씨 짱좋아요오늘 날씨 짱좋아요오늘 날씨 짱좋아요</a></td>
                    <td>2분 전</td>
                    <td>쪼가든</td>
                  </tr>
                    <tr>
                       <td>
                            <span className={styles.location}>부산</span>
                        </td>
                    <td><a href="#none">약간 추워요</a></td>
                    <td>2분 전</td>
                    <td>성화닝</td>
                  </tr>
                    <tr>
                       <td>
                            <span className={styles.location}>대구</span>
                        </td>
                    <td><a href="#none">겉옷 하나 챙기시길</a></td>
                    <td>3분 전</td>
                    <td>괄괄이</td>
                </tr>
                    <tr>
                        <td>
                            <span className={styles.location}>대구</span>
                        </td>
                    <td><a href="#none">겉옷 하나 챙기시길</a></td>
                    <td>3분 전</td>
                    <td>괄괄이</td>
                </tr>
                    <tr>
                       <td>
                            <span className={styles.location}>대구</span>
                        </td>
                    <td><a href="#none">겉옷 하나 챙기시길</a></td>
                    <td>3분 전</td>
                    <td>괄괄이</td>
                  </tr>
                </tbody>
                </table>
            </div>
    )
}
export default MainWeatherCmmty