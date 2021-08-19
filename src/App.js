import styled from 'styled-components'; //npm install --save styled-components
import Counter from './components/Counter/Counter';


const App = () => {
  return (
    <Content>
      <Counter/>
    </Content>
  )
}

//Utilizando a biblioteca styled-components
const Content = styled.div` 
  color: green;
`;

export default App;