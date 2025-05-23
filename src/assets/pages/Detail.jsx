import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { data } from "../data/data";

const StyledDetail = styled.div`
  width: 700px;
  margin: 24px auto;
  display: flex;
  gap: 16px;

  &>* {
    flex-basis: 50%;
  }
  p {
    height: max-content;
    border: 2px dashed pink;
    border-radius: 16px;
    padding: 24px;
  }
`

function Detail() {
  const { id } = useParams();
  const animal = data.find(v => v.id === Number(id));

  return (
    <StyledDetail>
      <img src={animal.img} alt={animal.name} />
      <div>
        <h1>🌟 {animal.name} 🌟</h1>
        <p>{animal.description}</p>
      </div>
    </StyledDetail>
  );
}

export default Detail;