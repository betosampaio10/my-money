import Meses from './Meses'
import AdicionarMes from './AdicionarMes'
import React from 'react'

const Home = () => {
    return(
      <div className='container'>
        <AdicionarMes />
        <Meses />
      </div>
    )
  }

  export default Home