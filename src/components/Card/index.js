import {useState} from 'react';
import Button from '../Button';

const Card = () => {
    
    const [valor, setValor] = useState(0);

    function Incremento() {
        setValor(valor + 1);
    }

    function Decremento() {
        setValor(valor - 1);
    }
    
    return (
        <div>
            <div className="card">
              <div className="card-header">
                Contador
              </div>
              <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={Incremento}
                >
                    Incrementar
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={Decremento}
                >
                    Decrementar
                </Button>
                <p>{valor}</p>
              </div>
            </div>
        </div>
    )
}

export default Card;

// FAZENDO A MESMA APLICAÇÃO SEM UTILIZAR O COMPONENTE 'BUTTON'
//
// <button 
//     type="button" 
//     class="btn btn-success"
//     onClick={Incremento}
// >
//     Adicionar
// </button>
// 
// <button
//     type="button"
//     class="btn btn-danger"
//     onClick={Decremento}
// >
//     Remover
// </button>