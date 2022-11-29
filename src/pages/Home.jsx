import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Card from "../components/Card"
import Navbar from '../components/Navbar'

const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async()=>{
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
  }

  useEffect(()=>{
    getBeers()
  })

  return (
    <>
    {/* agregue navbar y outlet a home  */}
    {/* con navbar voy a mostrar opciones home y contacto y con outlet voy a visibilizar el contenido de las mismas*/}
      <Navbar/> 
      <Outlet/>
      <div className='grid'>
        {/* mapeo state beers(7y 12) para que renderice la info en tarjetas (card) y a su vez a cada tarjeta la hago navegable encerrando card con link. */}
          {/* --> a etiquetas link y card les paso una key(id) y en link uso el id tambien para determinar la ruta; si no tengo info de estado nada renderizo.  */}
          {beers.length 
            ? beers.map(beer => (<Link key={beer.id} to={`/beer/${beer.id}`}><Card key={beer.id} data={beer}/></Link>))
             : null
          }
      </div>
    </>
  )
}

export default Home

