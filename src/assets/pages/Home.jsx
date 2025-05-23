import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { data } from '../data/data';
import Card from '../../components/Card';

const StyledInput = styled.div`
  margin: 8px auto 26px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  gap: 16px;

  input {
    flex-grow: 1;
    padding: 4px 8px;
    border-radius: 8px;
    border: 2px solid #ffdfe4;
    outline: none;
  }
  button {
    background-color: #ffdfe4;
    border-radius: 8px;
    border: none;
    padding: 4px 8px;
    outline: none;
    cursor: pointer;
  }
`
const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`

function Home() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/catalog?keyword=${input}`)
  }

  return (
    <>
      <StyledInput>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={handleSearch}>검색</button>
      </StyledInput>
      <StyledCardList>
        {data.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </StyledCardList>
    </>
  );
}

export default Home;