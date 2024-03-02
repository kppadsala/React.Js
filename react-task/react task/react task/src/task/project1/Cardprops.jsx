import React from 'react'
import Carddesign from './Carddesign'
import data from './ProductData.json'

export default function Cardprops() {
    return (
        <>
        <div className='d-flex gap-5 m-5 flex-wrap'>
            {data?.map?.((e) => {
                return (
                    <>
                        < Carddesign data={e} key={e?._id} />
                    </>
                );
            })}
            </div>
            </>
    )
}

