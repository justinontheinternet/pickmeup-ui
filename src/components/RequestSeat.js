import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import axios from 'axios';
import CardText from 'material-ui/lib/card/card-text';
import Snackbar from 'material-ui/lib/snackbar';


const styles = {
  root: {
    float: 'left'
  },

  textfield: {
    textAlign: 'left'
  },
};

export default class PostRide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000,
      message: 'You\'ve successfully requested a seat!',
      open: false,
    };
  }

  sendEmail = (event) => {
    event.preventDefault();
    console.log('email sent to ride poster')

    this.handleTouchTap()
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
    alert('Seat request cancelled');
  };

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value) : 0,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
      return (
        <div>
          <form
            onSubmit={this.sendEmail}
            className="form-style">
            <div>
            <TextField
              style={styles.textfield}
              id="name-field"
              floatingLabelText="Your name"
              ref="requestName"
            />
            </div>
            <TextField
              style={styles.textfield}
              id="post-destination-field"
              hintText="E.g. Lighthouse Labs"
              floatingLabelText="Where to?"
              ref="postDestination"
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={styles.textfield}
              id="post-origin-field"
              hintText="E.g. Steamwhistle Brewery"
              floatingLabelText="Where from?"
              ref="postOrigin"
            /><br/>
            <FlatButton
              label="Send Request"
              primary={true}
              keyboardFocused={true}
              type="submit"
              onTouchTap={this.sendEmail}
            />
            <FlatButton
              label="Cancel"
              secondary={true}
              onTouchTap={this.props.handleClose}
            />
            </form>
        </div>
      );
    }
  }


// <input type="text" value={this.state.title} onChange={ev => this.setState({title: ev.target.value})} />


// <Snackbar
//   open={this.state.open}
//   message={this.state.message}
//   action="undo"
//   autoHideDuration={this.state.autoHideDuration}
//   onActionTouchTap={this.handleActionTouchTap}
//   onRequestClose={this.handleRequestClose}
// />
