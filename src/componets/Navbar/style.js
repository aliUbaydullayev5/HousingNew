import styled from 'styled-components';
import logo from '../../assets/icons/logo.svg'
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: var(--primeruColor);
  justify-content: center;
  align-items: center;
  
`;
Container.Inset = styled.div`	  
  max-width: 1440px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 0 120px;
  
`;

export const Logo = styled.div`
  display: flex;
  justify-content: ${({ end }) => end === 'true' && 'end'};
  align-items: center;
`;
export const NavbarBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
Logo.Img = styled.img.attrs({
  src: `${logo}`
})``;
Logo.Text = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin: 0 10px;
`;

NavbarBody.Texts = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  margin: 0 10px;
  flex: 1;
`;


const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? '#00fff5' : 'white',
    textDecoration: 'none',
    margin: '0 32px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',

  }
}

export { Container, activeStyle };