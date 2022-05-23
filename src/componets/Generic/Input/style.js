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



const Container = styled.input`
  display: flex;
  width:  ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => height || '44px'};
  border-radius: 2px;
  padding-left: ${({ pl }) => `${pl}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  border: 1px solid #e6e9ec;

  /* ${({ type }) => getType(type)} */
  
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;

  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};

`;

const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 5%;
`;


export { Container, Wrapper, Icon };