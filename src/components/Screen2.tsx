import React from 'react'
import styles from './Screen2.css'

export type Screen2Props = {
  barText?: string
  logo?: string
  pageTitle?: string
  notificationTitle?: string
  notificationDescription?: string
  code?: string
  discountRules?: string
  buttonText?: string
  buttonLink?: string
}

const Screen2: React.FC<Screen2Props> = (props) => {
  return (
    <div className={styles.screen2}>
      <div className={styles.topBar}>
        <img
          src='https://node.clubecerto.com.br/superapp/images/assets/station/left-arrow.png'
          alt='seta'
          className={styles.arrowLeft}
        />
        <div className={styles.barText}>
          {props.barText ? props.barText : 'Notificações'}
        </div>
      </div>
      <div className={styles.contentContainer}>
        {props.logo ? (
          <img src={props.logo} className={styles.logoImg} alt='Logo' />
        ) : (
          <div />
        )}

        <h1 className={styles.pageTitle}>{props.pageTitle}</h1>
        {props.code ? <h3 className={styles.codeTitle}>CÓDIGO</h3> : ''}
        {props.code ? (
          <div className={styles.codeContainer}>
            <p className={styles.codeText}>{props.code}</p>
          </div>
        ) : (
          ''
        )}
        <p className={styles.notificationDescription}>
          {props.notificationDescription}
        </p>
        {props.buttonLink ? (
          <a href={props.buttonLink} target='_blank' rel='noopener noreferrer'>
            <button className={styles.buttonLink}>{props.buttonText}</button>
          </a>
        ) : (
          ''
        )}
        {props.buttonLink && props.discountRules ? (
          <div className='line-final' />
        ) : (
          ''
        )}
        {props.discountRules ? (
          <p className={styles.rulesText}>{props.discountRules}</p>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Screen2
