import * as React from 'react';

export interface ITodoAppProps {}

export interface ITodoAppState {}

export default class TodoList extends React.Component<ITodoAppProps, ITodoAppState> {
  constructor(props: ITodoAppProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div></div>;
  }
}
