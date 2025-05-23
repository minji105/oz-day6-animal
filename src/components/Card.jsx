import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
  background-image: url('/imgs/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 360px;
  padding: 40px;
  border-radius: 40px;
  cursor: pointer;

  img {
    width: 220px;
    height: 220px;
    object-fit: contain;
    transition: all .3s ease;
  }
  p {
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
  }
  &:hover img {
    transform: scale(1.05);
  }
`

function Card({ animal }) {
  const { id, name, img } = animal;

  return (
    <StyledCard>
      <Link to={`/detail/${id}`}>
        <img src={img} alt={name} />
        <p>🌟{name}🌟</p>
      </Link>
    </StyledCard>
  )
}

export default Card;