import {useState} from 'react';

function SmartCounter() {
    
    const [quantidade, upQuantidade] = useState(1);

    return (
        <>
            <h1>{quantidade}</h1>
            <button onClick={() => upQuantidade(quantidade+1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;