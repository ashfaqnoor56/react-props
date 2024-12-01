import React from 'react'

function Text({text,style}) {

   
  return (
    <div>
       <div className={style}>{text}</div>
    </div>
  )
}

export default Text