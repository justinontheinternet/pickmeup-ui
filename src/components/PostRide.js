import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

export default class PostRide extends React.Component {

/* The above is the same as:

var PostRide = React.createClass({
  [...]
})

export default PostRide;

*/

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

//   submitForm = (e) => {
//     $.post({
//     dataType: JSON,
//     success: success
//     }),
//     e.preventDefault();
//   }


// $(function() {
//     $.ajax('/products', {
//       dataType: 'json',
//       success: function(products) {
//         var $tableBody = $('products tbody');
//         });
//       }
//     });

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Post a Ride" onTouchTap={this.handleOpen} />
        <Dialog
          title="Post a Ride!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <TextField
          id="destination-field"
          hintText="E.g. Lighthouse Labs"
          floatingLabelText="Where to?"
        />
        <TextField
          id="origin-field"
          hintText="E.g. Steamwhistle Brewery"
          floatingLabelText="Where from?"
        />
        </Dialog>
      </div>
    );
  }
}