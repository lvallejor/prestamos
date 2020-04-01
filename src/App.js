import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';



function App() {

   //Definir el state
    const [cantidad, guardarCantidad] = useState(0); //useState se usa y regresa dos valores una variable y una funcion para interactuar con el state y se le puede dar un valor inicial, es decir lo primero es la variable para llamarla. Y lo colocamos en el padre para que fluya al hijo
    const [plazo, guardarPlazo] = useState('');
    const [total, guardarTotal] = useState(0);
    const [cargando, guardarCargando] = useState(false);

    let componente;

    if(cargando){
      componente = <Spinner />
    }else if(total === 0) {
      componente = <Mensaje />
    }else{
      componente = <Resultado 
                      total={total}
                      plazo={plazo}
                      cantidad={cantidad}
                      />
    }

  return (
    <Fragment>
         
          <Header 
            titulo = 'Cotizador de Prestamos'
          
          />
          <div className='container'>
          <Formulario
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            guardarPlazo={guardarPlazo}
            guardarTotal={guardarTotal}
            guardarCargando={guardarCargando}
           />

          <div className='mensajes'>
           {componente}
          </div>

         
        </div>
           
     
    </Fragment>
  );
}

export default App;
