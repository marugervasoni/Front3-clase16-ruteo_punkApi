import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Beer from './pages/Beer';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound'

function App() {
  return (
   <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/beer/:beerId' element={<Beer/>}/> 
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   </div>
  )
}


export default App

//hice ruta padre a home 
//a ruta beer le paso luego el nombre de mi variable que utiliza hook useparams