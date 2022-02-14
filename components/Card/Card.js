import Image from 'next/image'
import { useState } from "react" 
import TinderCard from 'react-tinder-card'
import styles from '../../styles/Card.module.css'

const Card = () => {
    const [message, setMessage] = useState([
        {
            id: 1,
            name: '',
            message: '',
            backgroundImage: 'https://image.freepik.com/free-vector/realistc-valentines-day-background_52683-54035.jpg'
        },
        {
            id: 2,
            name: '- Marvin Ebuenga',
            message: 'Dear Crush, \n Kung ini-SMALL ka nila, \n Huwag kang mag-alala, \n inii-BIG naman kita',
            backgroundImage: 'https://media-api.xogrp.com/images/7f87c7c1-7fad-433b-b78f-7a633bc1c73a~cr_0.0.1619.1085?quality=50'
        },
        {
            id: 3,
            name: '- Marvin Ebuenga',
            message: 'Sana telepono na lang ako, \n Baka sakaling sagutin mo ako',
            backgroundImage: 'https://png.pngtree.com/thumb_back/fh260/background/20201230/pngtree-valentines-day-dark-red-love-background-image_519171.jpg'
        },
        {
            id: 4,
            name: '- Marvin Ebuenga',
            message: 'Walang permanenteng bagay sa mundo. \n Kaya asahan mo, pagdating ng panahon apelyedo ko na ang gamit mo.',
            backgroundImage: 'https://media-api.xogrp.com/images/7f87c7c1-7fad-433b-b78f-7a633bc1c73a~cr_0.0.1619.1085?quality=50'
        },
        {
            id: 5,
            name: '- Marvin Ebuenga',
            message: 'Wag ka nang maghanap ng ka-date sa valentines day. Dahil isang araw lang yun. ang hanapin mo yung makaka-date mo habang buhay',
            backgroundImage: 'https://png.pngtree.com/thumb_back/fh260/background/20201230/pngtree-valentines-day-dark-red-love-background-image_519171.jpg'
        },
        {
            id: 6,
            name: '- Marvin Ebuenga',
            message: 'Kasali nga pala ako sa FRAT. FRATing single',
            backgroundImage: 'https://png.pngtree.com/thumb_back/fh260/background/20201230/pngtree-valentines-day-dark-red-love-background-image_519171.jpg'
        },
        {
            id: 7,
            name: '- Marvin Ebuenga',
            message: 'Paki Check nga yung RELO mo. \n Baka ORAS ng maging TAYO',
            backgroundImage: 'https://png.pngtree.com/thumb_back/fh260/background/20201230/pngtree-valentines-day-dark-red-love-background-image_519171.jpg'
        },
        {
            id: 8,
            name: '- Marvin Ebuenga',
            message: 'Masarap maging Tao at Mabuhay. \n Pero mas masarap maging Tayo Habambuhay!',
            backgroundImage: 'https://png.pngtree.com/thumb_back/fh260/background/20201230/pngtree-valentines-day-dark-red-love-background-image_519171.jpg'
        },
        {
            id: 9,
            name: '- Marvin Ebuenga',
            message: 'Handa akong takbuhin ang mundo... \n Basta ang finish line sa puso mo',
            backgroundImage: 'https://png.pngtree.com/thumb_back/fh260/background/20201230/pngtree-valentines-day-dark-red-love-background-image_519171.jpg'
        },
        {
            id: 10,
            name: '- Marvin Ebuenga',
            message: 'Kapag kasama kita, MAYAMAN ako \n Kasi, MAHIRAP  kapag wala ka ',
            backgroundImage: 'https://png.pngtree.com/thumb_back/fh260/background/20201230/pngtree-valentines-day-dark-red-love-background-image_519171.jpg'
        },
    ])
    
  return (
      <div>
          <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1}} className={styles.background_mage} >
            <Image src="/images/countdown_bg.jpg" alt="card" layout="fill" objectFit="cover" />
          </div>

            <div className={styles.card_container}>
                {
                    message
                    .sort((a, b) =>  b.id - a.id)
                    .map((item) => (
                        <TinderCard
                            className={styles.swipe}
                            key={item.id}
                            preventSwipe={['up', 'down']}
                        >
                            <div
                                style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                className={styles.card}
                            >
                                <div className={styles.card_message}>
                                    <p>{item.message}</p>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        </TinderCard>
                    ))
                }

                <div className={styles.hint}>
                    <p>Swipe a card</p>
                </div>
            </div>
      </div>
  )
}

export default Card