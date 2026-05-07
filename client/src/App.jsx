import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import NotFound from "./pages/NotFound"
import ComponentDidMount from "./components/Class/Mount"
import UpdatingExample from "./components/Class/Update"
import UnmountingExample from "./components/Class/Umount"
import FunComponent from "./components/FunComponent"
import FormExamples from "./pages/ExForms"
import MaterialExamples from "./pages/Material"
function App() {
  const fPrueba = ()=>console.log("ola k ase");
  const f1Prueba = ()=>console.log("comiendo o k ase");
  return (
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/montaje" element={<ComponentDidMount/>} />
      <Route path="/actualiza" 
       element={<UpdatingExample name="Mauricio" funcion={[fPrueba,f1Prueba]}/>} />
      <Route path="/desmonta" 
       element={<UnmountingExample />} />
      <Route path="/funcional" 
       element={<FunComponent name="Mauricio"/>} />
      <Route path="/forms" 
       element={<FormExamples/>} />
      <Route path="/material" 
       element={<MaterialExamples/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App
