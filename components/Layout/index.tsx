import { borderRadiusDefault } from '../../assets/themes/functions/borderDefault';
import { TypeDefault } from '../../assets/themes/TypeDefault';
import { ContainerDefault } from '../common/ContainerDefault/Container.module';
import { ContentDefault } from '../common/ContentDefault';
import { Header } from './Header';

export function Layout({ children }: TypeDefault) {
  return (
    <ContainerDefault>
      <ContentDefault
        variant={{ background: { index: 'gray', value: 'v800' } }}
        borderRadiusDefault={() => borderRadiusDefault({ width: 0.1 })}
      >
        <Header />
        {children}
      </ContentDefault>
    </ContainerDefault>
  );
}
