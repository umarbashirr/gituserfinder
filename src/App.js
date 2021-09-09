import React from 'react';
import styled from 'styled-components';
import SearchBox from './Components/SearchBox/SearchBox';

function App() {
  return (
    <Container>
      <AppLabel>
        DevFinder
        <span>Light</span>
      </AppLabel>
      <SearchBox />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 700px;
  margin: auto;
`;

const AppLabel = styled.h1`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
