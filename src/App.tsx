import { BrowserRouter, Route, Routes } from "react-router-dom"
import Produtos from "./pages/Produtos/Produtos"
import Cadastro from "./pages/Cadastro/Cadastro"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/produtos/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/pesquisa" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
