import { useState } from 'react';
const Feeback=()=>{


       const[good,setGood]=useState(0);
       const[newteral,setNewteral]=useState(0);
       const[bad,setBad]=useState(0);
       return(
        <>
            <div>

                <button onclick={()=>setGood(good+1)}>Good</button>
                <button onclick={()=>setnewteral(newteral+1)}>Newteral</button>
                <button onclick={()=>setbad(bad+1)}>Bad</button>
                <p>good{good}</p>
                <p>newteral{newteral}</p>
                <p>bad{bad}</p>
                <p>total{good+newteral+bad}</p>
            </div>
        </>
       );
}
export default Feeback;