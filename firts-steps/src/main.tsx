import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import {MyAwesomeApp} from './MyAwesomeApp' // se tiene que llamar igual a la function del componente

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyAwesomeApp/>
  </StrictMode>,
)
