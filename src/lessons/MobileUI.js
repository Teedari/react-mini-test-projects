import React from 'react'

function MobileUI(props) {
  return (
    <div className='mobile'>
    <nav>
      <h4>{props.title}</h4>
    </nav>
    <main className=''>
      {props.children}
    {
      props.fabOnClick ?
      <button onClick={props.fabOnClick === false ?() => {console.log('floatActionButton clicked!!')} : props.fabOnClick} className='mobile-button__floatButton'>+</button> : <div></div>
    }
    </main>
  </div>
  )
}

export default MobileUI
