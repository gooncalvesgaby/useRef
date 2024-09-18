import Ref from "./Components/Ref/ref.jsx"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
`
function App() {
  
  return (
    <>
    <Ref/>
    <GlobalStyle/>
    </>
  )
}

export default App
