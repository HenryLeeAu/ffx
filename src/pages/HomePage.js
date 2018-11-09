import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTheme, fetchProfile } from 'actions/theme';
import queryString from 'query-string';
import Box from 'components/Box';
import Button from 'components/Button';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // get the client_id from queryString
    if (this.props.location.search) {
      const qs = queryString.parse(this.props.location.search);
      this.props.fetchProfile(qs.client_id);
    } else {
      this.props.getTheme({ color: 'default' });
    }
  }

  render() {
    return (
      <Box>
        You are using theme {this.props.theme.color}<br/>
        <Button>click here to show welcome message</Button>
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
)(HomePage);
