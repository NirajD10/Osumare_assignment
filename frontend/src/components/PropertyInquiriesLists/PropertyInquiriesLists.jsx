import React from 'react'
import './PropertyInquiriesLists.css'
import HeadingTitle from '../HeadingTitle/HeadingTitle'
import BigListItem from '../BigListItem/BigListItem'
import { propertyinquireslist } from '../../constant/data'

function PropertyInquiriesLists() {
  return (
    <div className='container-padding'>
        <HeadingTitle title="Driving Property Inquiries to Conversions" />
        <div className='propertylists'>
            {propertyinquireslist.map(item => (
                <React.Fragment key={item.id}>
                    <BigListItem vector={item.vector} title={item.title} info={item.info} />
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default PropertyInquiriesLists