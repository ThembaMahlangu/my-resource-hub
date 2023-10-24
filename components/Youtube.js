import React from 'react'

export default function Youtube() {
  return (
    <>
      <div className='w-full h-0 relative' style={{ paddingBottom: '39.51%' }}>
            <iframe
              className='rounded-lg absolute top-0 left-0 w-full h-full'
              src={"https://www.youtube.com/embed/lwd-1M6u-As"}
              title="Aymos ft Bassie - Izenzo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
    </>
  )
}
