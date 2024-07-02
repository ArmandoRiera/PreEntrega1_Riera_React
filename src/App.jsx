import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  const [cartCount, setCartCount] = useState(5)

  return (
    <>
      <NavBar cartCount={cartCount} title="El Alijo del Guerrero" />

      <ItemListContainer greetings="Bienvenido al mejor mercado de indumentaria para guerreros" />

    </>
  )
}

export default App
