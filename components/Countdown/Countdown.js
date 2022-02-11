import styles from '../../styles/Countdown.module.css'

const Countdown = ({days, hours, minutes, seconds}) => {
  return (
      <div className={styles.countdown__bg}>
          <div className={styles.countdown__title__container}>
            <div className={styles.countdown__title}>Comming soon</div>
            <div className={styles.countdown__caption}>{`Happy Valentine's Day`}</div>
            <div className={styles.countdown__name}>MRX</div>
          </div>
          <div className={styles.countdown__container}>
                <div className={styles.countdown__timer}>
                    <div className={styles.countdown__days}>
                        {days}
                        <div className={styles.days}>
                            Days
                        </div>
                    </div>
                    <div className={styles.countdown__hours}>
                        {hours}
                        <div className={styles.hours}>
                            Hours
                        </div>
                    </div>
                    <div className={styles.countdown__minutes}>
                        {minutes}
                        <div className={styles.minutes}>
                            Minutes
                        </div>
                    </div>
                    <div className={styles.countdown__seconds}>
                        {seconds}
                        <div className={styles.seconds}>
                            Seconds
                        </div>
                    </div>
                </div>
          </div>
      </div>
  )
}

export default Countdown