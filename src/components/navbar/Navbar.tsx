import './navbar.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INavbarProps {}

export interface INavbarState {}

export default class Navbar extends React.Component<INavbarProps, INavbarState> {
  constructor(props: INavbarProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className='navbar-container'>
        <Link to='/' className='website-logo-container'>
          <img className='website-logo' src='/logo.png'></img>
          <span className='website-name'>JS Tools</span>
        </Link>
      </div>
    );
  }
}
