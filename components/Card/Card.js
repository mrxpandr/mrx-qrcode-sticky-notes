import { useState } from "react" 
import TinderCard from 'react-tinder-card'
import styles from '../../styles/Card.module.css'

const Card = () => {
    const [message, setMessage] = useState([
        {
            name: '- Marvin Ebuenga',
            message: 'Sana telepono na lang ako, \n Baka sakaling sagutin mo ako',
            backgroundImage: 'https://png.pngtree.com/thumb_back/fh260/background/20201230/pngtree-valentines-day-dark-red-love-background-image_519171.jpg'
        },
        {
            name: '- Marvin Ebuenga',
            message: 'Dear Crush, \n Kung ini-SMALL ka nila, \n Huwag kang mag-alala, \n inii-BIG naman kita',
            backgroundImage: 'https://media-api.xogrp.com/images/7f87c7c1-7fad-433b-b78f-7a633bc1c73a~cr_0.0.1619.1085?quality=50'
        },
        {
            name: '',
            message: '',
            backgroundImage: 'https://image.freepik.com/free-vector/realistc-valentines-day-background_52683-54035.jpg'
        },
    ])
    
  return (
      <div>
          <div className={styles.background_mage}></div>

            <div className={styles.card_container}>
                {
                    message.map((item, index) => (
                        <TinderCard
                            className={styles.swipe}
                            key={index}
                            preventSwipe={['up', 'down']}
                        >
                            <div
                                style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                className={styles.card}
                            >
                                <div className={styles.card_message}>
                                    <pre>
                                        <p>{item.message}</p>
                                    </pre>
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