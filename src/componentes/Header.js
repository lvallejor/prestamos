import React from 'react'
/*
function Header({titulo}){

    return(
        <Fragment>
        <h1>{titulo}</h1>  //Esta es una forma de hacerlo mas larga, mas codigo
        </Fragment>
    )
}

export default Header;
*/

const Header = ({titulo}) => ( //Esta forma es mas corta menos codigo, pero no se va a poder colocar codigo JavaScript entre el return y las llaves porque esta todo
                                //Simplificado.
    <h1>{ titulo }</h1>
 );

export default Header;
 
