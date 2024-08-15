import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import WordInfo from "./pages/WordInfo"

const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/word/:word/id/:id' element={<WordInfo />} />
    <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} />

  </Routes>
    </>
  )
}

export default App