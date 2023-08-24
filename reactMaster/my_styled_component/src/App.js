import styled from "styled-components";
function App() {
  return (
    <Father style={{ display : "flex" }}>
      <Box bgColor = "teal"><Text>안녕하세요!</Text></Box>
      <Box bgColor = "tomato"></Box>
    </Father>
  );
}

export default App;

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color : white;
`