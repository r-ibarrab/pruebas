import React from 'react';
import  {MainTitle} from './stylecomponents';


const app= ()=>{

return(
    <div className="container">
        <MainTitle className="hola" color>hola</MainTitle>

        <h1 onClick={()=>{
            document.querySelector('.hola')
        }
        }></h1>

    </div>
)


}

export default app;