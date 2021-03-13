import './home.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IHomeProps {}

export interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className='home-container'>
        <Link to='/timekeeper'>
          <div className='home-card'>
            <span className='label'>Time Keeper</span>
            <span className='iconify' data-icon='fluent:timer-20-regular' data-inline='false'></span>
          </div>
        </Link>
        <Link to='/todolist'>
          <div className='home-card'>
            <span className='label'>Todo List</span>
            <span className='iconify' data-icon='icons8:todo-list' data-inline='false'></span>
          </div>
        </Link>
      </div>
    );
  }
}
