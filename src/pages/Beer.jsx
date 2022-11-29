import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {

    const [beer, setBeer] = useState([])
    //uso hook useparams y lo paso al fetch(15) y al titulo(26)
    const {beerId} = useParams()
    //uso navigate para el botón(33)
    const navigate = useNavigate()

    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente --> variable beerId(9)
        const res = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(()=>{
      getBeer()
    })

  return (
    <div>
        <h2>Cerveza numero: {beerId}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>

  )
}

export default Beer