import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTheme, fetchProfile } from 'actions/weather';
import Box from 'components/Box'
import Input from 'components/Input'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      deg:'degf',
      wind:'off'
    };
  }
  handleChange = (evt) =>{
    this.setState({
      title:evt.target.value
    })
  }
  handleDegOption = (evt) =>{
    this.setState({
      deg: evt.target.value
    },()=>{
      console.log('scs')
    })
  }
  handleWindOption = (evt) =>{
    this.setState({
      wind: evt.target.value
    },()=>{
      console.log('wind')
    })
  }
 

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(this.showPosition);
  }
  showPosition(position) {
   console.log( position.coords.latitude, position.coords.longitude ) 
  }
  render() {
    return (
      <Box>
        <ul>
          <li>  Title:<br/>
            <Input type="text" name="firstname" onChange = { this.handleChange } value={ this.state.title }/>
          </li>
          <li>
            <input type="radio" name="deg" value="degc"  checked={this.state.deg === 'degc'}  onChange={this.handleDegOption}/> C
            <input type="radio" name="deg" value="degf" checked={this.state.deg === 'degf'}  onChange={this.handleDegOption} /> F
          </li>
          <li>
            <input type="radio" name="wind" value="on" checked={this.state.wind === 'on'}  onChange={this.handleWindOption} /> On
            <input type="radio" name="wind" value="off" checked={this.state.wind === 'off'}  onChange={this.handleWindOption} /> Off
          </li>
        </ul>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.themeReducer,
  };
}

export default connect(
  mapStateToProps,
  { getTheme, fetchProfile }
)(App);
