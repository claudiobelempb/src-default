import { FaRegClock, FaScroll } from 'react-icons/fa';
import ImgLogo from '../../../assets/img/logo.svg';
import { BoxDefault } from '../../common/BoxDefault';
import { ContainerDefault } from '../../common/ContainerDefault';
import { ContentDefault } from '../../common/ContentDefault';
import { ImgDefault } from '../../common/ImgDefault';
import { LinkDefault } from '../../common/LinkDefault';
import * as Styled from './Header.module';
export function Header() {
  return (
    <ContainerDefault>
      <ContentDefault>
        <Styled.HeaderContainer>
          <BoxDefault>
            <LinkDefault href='/'>
              <ImgDefault src={ImgLogo} width={4} height={4} />
            </LinkDefault>
          </BoxDefault>
          <BoxDefault justifyContentDefault={{ value: 'flex-end' }}>
            <LinkDefault isHover href='/' title='Timer'>
              <FaRegClock />
            </LinkDefault>
            <LinkDefault isHover href='/history' title='Histórico'>
              <FaScroll />
            </LinkDefault>
          </BoxDefault>
        </Styled.HeaderContainer>
      </ContentDefault>
    </ContainerDefault>
  );
}
