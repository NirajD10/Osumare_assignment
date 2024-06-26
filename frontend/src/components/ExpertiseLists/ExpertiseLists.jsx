import React from 'react'
import './ExpertiseLists.css'
import { expertiselists } from '../../constant/data'
import HeadingTitle from '../HeadingTitle/HeadingTitle'
import BigListItem from '../BigListItem/BigListItem'

function ExpertiseLists() {
  return (
    <section className='container-padding expertise-toppadding' role='article' tabIndex={0}>
    <HeadingTitle title="Our Expertise in Action" />
    <div className='expertiselists'>
        {expertiselists.map(item => (
            <React.Fragment key={item.id}>
                <BigListItem vector={item.vector} title={item.title} info={item.info} />
            </React.Fragment>
        ))}
    </div>
</section>
  )
}

export default ExpertiseLists