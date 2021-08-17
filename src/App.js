import Item from './components/Item';
import Card from './components/Card';
import styled from 'styled-components'; //npm install --save styled-components


const App = () => {
  return (
    <Content>
      <h1>Aplicação React</h1>
      <ul>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      </ul>
      <Card/>
    </Content>
  )
}

//Utilizando a biblioteca styled-components
const Content = styled.div` 
  color: green;
`;

export default App;