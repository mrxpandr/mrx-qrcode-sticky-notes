import Image from 'next/image'
import styles from '../../styles/Countdown.module.css'

const Countdown = ({days, hours, minutes, seconds}) => {
  return (
      <div>
          <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1}} >
            <Image src="/images/countdown_bg.jpg" alt="countdown" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.countdown__title__container}>
            <div className={styles.countdown__title}>Comming soon</div>
            <div className={styles.countdown__caption}>Content will be available on February 14, 2022 at 9:00AM</div>
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