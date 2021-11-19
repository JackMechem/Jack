import logo from './logo.svg';
import './App.css';
import colors from './style/colors';
import styled from 'styled-components';

const Background = styled.div`
  background-color: ${colors.background};
  height: 100%;
  width: 100%;
  position: fixed;
  padding: 10px
`
const Title = styled.text`
  color: ${colors.title};
  font-weight: 500;
  font-size: large;
`

function App() {
  return (
    <Background>
      <Title>Jack Mechem</Title>
    </Background>
  );
}

export default App;
