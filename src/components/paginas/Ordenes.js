import React from 'react';
import { Link } from 'react-router-dom';

const Ordenes = () => {
       return( 
        <>
           <h1 className="text-3xl font-light mb-4">Ordenes</h1>
         <Link to="/nueva-orden" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Orden Prueba
            </Link>
        </>
     );
}
 
export default Ordenes;