import { LinkHTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import { ContainerNavLink } from './Link.module';

interface LinkDefaultTypes extends LinkHTMLAttributes<HTMLLinkElement> {}
type LinkDefaultProps = TypeDefault & LinkDefaultTypes;

export function LinkDefault({ isHover, ...props }: LinkDefaultProps) {
  return (
    <ContainerNavLink isHover={isHover}>
      <NavLink
        title={props.title}
        to={props.href ? props.href : ''}
        target={props.target}
      >
        {props.children}
      </NavLink>
    </ContainerNavLink>
  );
}

LinkDefault.defaultProps = {
  children: 'Link Default',
  href: '/',
  target: '_self'
};
