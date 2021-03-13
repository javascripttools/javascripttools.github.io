import './app.scss';
import * as React from 'react';
import Navbar from '../navbar/Navbar';
import Timekeeper from '../timekeeper/Timekeeper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../home/Home';
import TodoList from '../todo/TodoList';

export interface IAppProps {}

export interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {};
  }

  private theme = createMuiTheme({
    typography: {
      // Tell Material-UI what's the font-size on the html element is.
      htmlFontSize: 10,
    },
  });

  public render() {
    return (
      <Router>
        <ThemeProvider theme={this.theme}>
          <div className='app-container'>
            <Navbar></Navbar>
            <Switch>
              <Route path='/todolist'>
                <TodoList />
              </Route>
              <Route path='/timekeeper'>
                <Timekeeper />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}
