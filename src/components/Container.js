import React from 'react'

function Container(props) {

  const RowContainer = () => {
    return (
      <div className='row'>
      <div className='center showcase'>
        <h2>{props.title}</h2>
       
      </div>
      <div>
        {props.children}
      </div>
    </div>
    );
  }
  

 return props.reverse === true ? RowContainer() :
 (
    <div className='row reverse'>
      <div className='center showcase'>
      <h2>{props.title}</h2>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Container
