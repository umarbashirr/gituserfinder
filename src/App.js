import React, { useState } from 'react';
import styled from 'styled-components';
import DisplayBox from './Components/DisplayBox/DisplayBox';
import SearchBox from './Components/SearchBox/SearchBox';

function App() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState('');
  const [click, setClick] = useState(false);

  return (
    <Container>
      <AppLabel>Github User Finder App</AppLabel>
      <SearchBox
        data={data}
        setData={setData}
        username={username}
        setUsername={setUsername}
        setClick={setClick}
      />

      {click ? <DisplayBox data={data} /> : ''}
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 728px) {
    padding: 0 10px;
  }
`;

const AppLabel = styled.h1`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
