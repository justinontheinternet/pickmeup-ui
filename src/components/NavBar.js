import React from 'react';
// import PostRide from './PostRide';
// import NewUser from './NewUser';
// import LogInForm from './LogInForm';
// import Avatar from './Avatar';
// import AppBar from 'material-ui/lib/app-bar';

// var NavBar = React.createClass({

//   render: function(){
//     return (
//       <div>

//         <Avatar />
//         <PostRide />
//         <NewUser />
//         <LogInForm />
//       </div>
//     );
//   }

// });

// export default NavBar;

import Avatar from './Avatar';
import PostRide from './PostRide';
import LogInForm from './LogInForm';
import NewUser from './NewUser';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
// import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

const ToolbarExamplesSimple = () => (
  <Toolbar
    style={{
      background: 'lightblue'
    }}>
    <ToolbarGroup firstChild={true} float="left">
      <ToolbarTitle
        text="pickmeup"
        style={{
          fontFamily: 'gotham',
          color: '#fff'
        }} />
    </ToolbarGroup>
    <ToolbarGroup float="right">
      <FontIcon className="muidocs-icon-custom-sort" />
      <IconMenu
        iconButtonElement={
          <IconButton touch={true}>
            <NavigationExpandMoreIcon />
          </IconButton>
        }
      >
        <MenuItem primaryText="Download" />
        <MenuItem primaryText="More Info" />
      </IconMenu>
      <ToolbarSeparator />
      <PostRide />
    </ToolbarGroup>
  </Toolbar>
);

export default ToolbarExamplesSimple;

      // <DropDownMenu value={3}>
      //   <MenuItem value={1} primaryText="All Broadcasts" />
      //   <MenuItem value={2} primaryText="All Voice" />
      //   <MenuItem value={3} primaryText="All Text" />
      //   <MenuItem value={4} primaryText="Complete Voice" />
      //   <MenuItem value={5} primaryText="Complete Text" />
      //   <MenuItem value={6} primaryText="Active Voice" />
      //   <MenuItem value={7} primaryText="Active Text" />
      // </DropDownMenu>