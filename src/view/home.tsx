import styled from 'styled-components';
import Form from '../components/form';

const TITLE = styled.span`
  font-size: 20px;
  color: #1b31a8;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 480px) {
    width: 100%;
    font-size: 18px;
  }
`;
const WRAPPER = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 48px 0 0;

  @media (max-width: 560px) {
    width: 100%;
  }
`;

function Home(): React.ReactElement {
  return (
    <WRAPPER>
      <TITLE>
        {`Let's plan your`} <b>saving goal.</b>
      </TITLE>
      <Form />
    </WRAPPER>
  );
}

export default Home;
