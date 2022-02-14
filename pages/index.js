import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card/Card'
import styles from '../styles/Home.module.css'
import Countdown from 'react-countdown';
import CountdownContainer from '../components/Countdown/Countdown';
import moment from 'moment'

export default function Home() {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Card />;
        } 
        else {
            return <CountdownContainer days={days} hours={hours} minutes={minutes} seconds={seconds} />
        }
      };
    
    return (
        <div>
            <Head>
                <title>Marvin Ebuenga</title>
                <meta name="description" content="MRX QR CODE Sticky Notes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.home_container}>
                {/* <Countdown
                    date={moment('2022-02-14 09:00:00').format()}
                    renderer={renderer}
                /> */}
                <Card />
            </div>
        </div>
    )
}
