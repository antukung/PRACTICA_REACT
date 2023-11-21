
import './App.css'
import SelectDeTiposDeProductos from './selector'
import SelectDeCantidadDeProductos from './selectro2'


function App() {
 

  return (
    <>
      <h2 id="nombre">
        Supermecado los DEBS
      </h2>
      <div>
      <SelectDeTiposDeProductos/>
      </div>
      <div>    
      <SelectDeCantidadDeProductos/>
      </div>
        
        
    </>
  )
}

export default App
