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
                  {/* <col width={'17%'}></col> */}
                </colgroup>
                <thead>
                    <tr>
                      <th></th>
                      <th>글 제목</th>
                      <th>작성자</th>
                      {/* <th></th> */}
                    </tr>
                </thead>
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
                       {/*  <td>
                          <button>보러가기</button>
                        </td> */}
                        </tr>
                      )}
                  </tbody>
                </table>
            </div>
    )
}
export default MainWeatherCmmty