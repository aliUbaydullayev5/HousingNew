import styled from 'styled-components';


const getType = (type) => {
  switch (type) {
    case 'secondary':
      return {
        border: '1px solid #e6e9ec',
        color: '#0D263B'
      };
    case 'primary':
      return {
        background: '#0061DF',
        border: 'none',
        color: '#fff'
      };
    default:
      return {
        border: '1px solid #E6E9EC',
        color: '#fff',
      }
  }
}


const Container = styled.div`
  display: flex;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  justify-content: center;
  align-items: center;

  width:  ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => height || '44px'};
  min-width: ${({width})=> (width ? width : '100%')};
  cursor: pointer;
  /* color: #fff; */
  ${({ type }) => getType(type)}
  
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
  
`;

export {Container};