import React from 'react'
import './AdvantageCard.css'

function AdvantageCard({title, info, vector}) {
  return (
    <div className='advantages-card'>
        <div className='advantages-card__vector'>
            <img src={vector} alt={title} />
        </div>
        <div className='advtanges-card__titles'>
            <h4 className='poppins-semibold'>{title}</h4>
            <p className='inter-normal'>{info}</p>
        </div>
    </div>
  )
}

export default AdvantageCard