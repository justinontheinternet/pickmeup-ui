import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';

const styles = {
  popover: {
    padding: 20,
  },
};

var LogInForm = React.createClass({

  getInitialState: function() {
    return {open: false}
  },

  displayLogInForm: function(e) {
    e.preventDefault();
      return (
        <form action="/sessions" method="POST">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="user[email]" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="user[password]" placeholder="Password" />
          </div>
          <div>
            <FlatButton
              label="Let's Roll"
              primary={true}
              type="submit" />
          </div>
        </form>
      )

  },

  toggleLogInForm: function(event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  },

  handleRequestClose: function() {
    this.setState({
      open: false,
    });
  },

  render: function(){
    return (
      <span>
        <RaisedButton
          label="Log in"
          className="log-in-button" onClick={this.toggleLogInForm}
          style={{
            margin: '5px'
          }} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationFromTop}
        >
          <div style={styles.popover}>
            {this.displayLogInForm()}
          </div>
        </Popover>
      </span>
    );
  }

});

export default LogInForm;
