import React from 'react'

import SK from 'sk-react-components'
import 'sk-react-components/dist/index.css'

const App = () => {
  return (
    <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, height: '100vh' }}>
      <SK.SKButton onClick={() => { console.log('Default') }} text="Default" />
      <SK.SKButton variant="text" onClick={() => { console.log('Text') }} text="Text" />
      <SK.SKButton variant="primary" onClick={() => { console.log('Primary') }} text="Primary" />
      <SK.SKButton variant="success" onClick={() => { console.log('success') }} text="success" />
      <SK.SKButton variant="danger" onClick={() => { console.log('Danger') }} text="Danger" />
      <SK.SKCard styles={{width:'300px'}}>
        <div>Welcome to the jungle</div>
        <div>Im Alex Paredes</div>
      </SK.SKCard>
    </div>
  )
}

export default App
