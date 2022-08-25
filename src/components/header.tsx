import styled from 'styled-components';
import { ReactComponent as logoIcon } from '../assets/icons/logo.svg';

const WRAPPER = styled.div`
  background: #fff;
  height: 80px;
  width: 100%;

  @media (max-width: 480px) {
    height: 56px;
  }
}
`;
const LOGO = styled(logoIcon)`
  height: 32px;
  width: 100px;
  margin: 24px 56px;

  @media (max-width: 480px) {
    height: 24px;
    width: 75px;
    margin: 16px;
  }
`;

function Header(): React.ReactElement {
  return (
    <WRAPPER>
      <LOGO />
    </WRAPPER>
  );
}

export default Header;
