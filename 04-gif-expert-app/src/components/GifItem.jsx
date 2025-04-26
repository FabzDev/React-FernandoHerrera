import React from 'react'

export const GifItem = ({url, title}) => {
  return (
    <div className='card'>
      <img src={url} />
      <p>{title}</p>
    </div>
  )
}

export default GifItem
