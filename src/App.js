import styled from 'styled-components'; //npm install --save styled-components
import SmartCounter from './components/SmartCounter/SmartCounter';


const App = () => {
  return (
    <Content>
      <h1>Hello World</h1>
      <SmartCounter/>
    </Content>
  )
}

//Utilizando a biblioteca styled-components
const Content = styled.div` 
  color: green;
`;

export default App;