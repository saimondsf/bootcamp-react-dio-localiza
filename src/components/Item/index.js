const Item = ({children}) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          {children}
        </a>
    )
}

export default Item;

// OUTRA FORMA DE UTILIZAR O LINK ENTRE AS PROPRIEDADES DE UM COMPONENTE
//
// <Item texto='Item 1'/>
//
// const Item = (props) => {
//     return(
//         <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
//           {props.texto}  {props.children}
//         </a>
//     )
// }