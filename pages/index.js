import { BackgroundColor, red } from "jest-matcher-utils/node_modules/chalk";
import { useState } from "react";

function Home() {
    return(
        <div style={{fontSize: "40px", background: "#00324d", color: "#f0f8ff"}}>
            <div>Home 1</div>
            <Contador />
            <div style={{color: "#808080"}}>Teste</div>
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador} >Adicionar</button>
        </div>
    )
}

export default Home