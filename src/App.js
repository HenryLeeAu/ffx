import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTheme, fetchProfile } from 'actions/weather';
import Container from 'Container'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(this.showPosition);
  }
  showPosition(position) {
   console.log( position.coords.latitude, position.coords.longitude ) 
  }
  render() {
    return (
    <Container>
    
    </Container>
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
