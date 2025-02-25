import React from 'react'

import ExampleComponent from 'preview-phone'
import 'preview-phone/dist/index.css'

const App = () => {
  return (
    <ExampleComponent
      title='Create React Library Example 😄'
      description='Teste'
      type='screen'
      barText='Teste'
      buttonLink='google.com'
      buttonText='Teste '
    />
  )
}

export default App
