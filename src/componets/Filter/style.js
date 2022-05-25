import styled from 'styled-components';

import { ReactComponent as home } from '../../assets/icons/home.svg'
import { ReactComponent as price } from '../../assets/icons/price.svg'
import { ReactComponent as key } from '../../assets/icons/key.svg'
import { ReactComponent as setting } from '../../assets/icons/setting.svg'
import { ReactComponent as search } from '../../assets/icons/search.svg'


const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;

`;

Container.Inset = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  grid-gap: 20px;
  padding: 0 130px;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 8px;

`;

// Icon.Price = styled(price)`
//   margin-right: 8px;
// `;
Icon.Home = styled(home)`
  margin-right: 8px;
  width: 30px;

`;
// Icon.Key = styled(key)`
//   margin-right: 8px;
// `;
Icon.Setting = styled(setting)`
  margin-right: 8px;
`;
Icon.Search = styled(search)`
  margin-right: 8px;
`;


const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #fff;
  border-radius: 5px;
  padding: 10px;

`;

Advanced.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;

`;

const Section = styled.div`
  display: grid;
  margin-bottom: 15px;
  grid-template-columns: ${({ gcol }) => gcol ? gcol : '1fr'};
`;







export { Container, Icon, Advanced, Section }
