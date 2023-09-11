import React from 'react'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import styles from './App.css'

export type IProps = {
  type: 'screen' | 'notifications'
  title: string
  description: string
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

function App({
  title,
  description,
  barText,
  buttonLink,
  buttonText,
  code,
  discountRules,
  logo,
  notificationDescription,
  notificationTitle,
  pageTitle,
  type
}: IProps) {
  return (
    <div className={styles.App}>
      {type === 'notifications' ? (
        <Screen1 title={title} description={description} />
      ) : (
        <Screen2
          barText={barText}
          logo={logo}
          pageTitle={pageTitle}
          notificationTitle={notificationTitle}
          notificationDescription={notificationDescription}
          code={code}
          discountRules={discountRules}
          buttonText={buttonText}
          buttonLink={buttonLink}
        />
      )}
    </div>
  )
}

export default App
