import styles from "../../routes/Home.module.scss";

function MainWeatherCmmty({boards}) {
    return (
        <div className={styles.todays_weather_cmnty}>
              <h1>오늘 날씨 어때요?
                <span>자세히 보기 &gt;</span>
              </h1>
                <table>
                <caption>오늘의 날씨</caption>
                <colgroup>
                  <col width={'17%'}></col>
                  <col width={'auto'} ></col>
                  <col width={'17%'}></col>
                </colgroup>
                <thead>
                    <tr>
                      <th>위치</th>
                      <th>글 제목</th>
                      <th>작성자</th>
                    </tr>
                </thead>
                {boards.length == 0 ?
                  <tbody>
                    <tr>
                      <td colSpan={3}>오늘 등록된 게시글이 없습니다.</td>
                    </tr>
                  </tbody>: 
                  <tbody>
                    {boards.map((board, index) => 
                        <tr key={index}>
                          <td>
                              <span className={styles.location}>{board.location}</span>
                          </td>
                          <td>
                            <a href="#none" className={styles.new}>{board.ttl}</a>
                          </td>
                          <td>{board.reg_ps_id}</td>
                        </tr>
                      )}
                  </tbody>}
                
                </table>
            </div>
    )
}
export default MainWeatherCmmty