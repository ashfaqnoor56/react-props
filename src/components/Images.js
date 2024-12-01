import React from 'react'

function Images({link,style}) {


  return (
    <div>
      <img className={style} src={link} />
    </div>
  )
}

export default Images;
