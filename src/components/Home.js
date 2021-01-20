import React from 'react';
import ReactDOM from 'react-dom';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register'
import Form from './Form'


class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
      this.setState({
        showComponent: true,
      });
    }
  
    render() {
      return (
        <div>
          <Form/>
          <h1>You dont have accoubt?</h1>
          <Button onClick={this._onButtonClick}>Sing up !</Button>
          {this.state.showComponent ?
             <Register /> :
             null
          }
        </div>
      );
    }
  }
  export default Home;