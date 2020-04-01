import React from 'react';
import './Spinner.css'; //De esta forma cuando usemos o importemos este archivo tambien se llevara al css


const Spinner = () => {
    return ( 
<div className="sk-chase">
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
</div>
     );
}
 
export default Spinner;