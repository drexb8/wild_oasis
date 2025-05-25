import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <H1>Hello world</H1>
      <Button>Click me</Button>
    </>
  );
}

export default App;
