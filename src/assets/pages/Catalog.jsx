import { useSearchParams } from "react-router-dom";
import styled from 'styled-components';
import { data } from "../data/data";
import Card from "../../components/Card";
import { getRegExp } from 'korean-regexp';

const Emoji = styled.div`
  position: absolute;
`
const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  .none {
    margin: 80px 0;
  }
`

function Catalog() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const keywordRegex = getRegExp(keyword, { initialSearch: true })
  const results = data.filter(v => keywordRegex.test(v.name));

  return (
    <>
      <Emoji>
        <p>|∧∧</p>
        <p>| ' ω'&#41;</p>
        <p>|⊂ノ</p>
        <p>|</p>
      </Emoji>
      <StyledCardList>
        {results.length > 0 ? (
          results.map((result) => (
            <Card key={result.id} animal={result} />
          ))
        ) : (
          <p className="none">검색 결과가 없습니다.</p>
        )}
      </StyledCardList>
    </>
  );
}

export default Catalog;