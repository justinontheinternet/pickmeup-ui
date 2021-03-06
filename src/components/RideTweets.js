import React from 'react';
import axios from 'axios';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import ModalWindow from './ModalWindow';

const styles = {
  card: {
    marginTop: 1,
    marginBottom: 4,
    fontFamily: 'Gotham Bold',
  },

  cardHeader: {
  	background: 'white',
  },

	contentColor: {
		background: 'white',
	},

	cardActions: {
		background: '#00BCD4',
		textAlign: 'center',
	},
};

export default class RideTweets extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			titles: [],
			seats: [],
			names: [],
			ids: [],
			avatars: [],
			details: [],
			rides: []
		}
	}

	componentWillMount() {
	  this.loadRidesDetails(this.props.destinationField);
	  // console.log("component did mount")
	}

	loadRidesDetails = (userDestination) => {
		axios.get('http://localhost:3000/rides', {
			params: {
				userDestination: userDestination
			}
		})
			.then( (response) => {

			this.setState({rides: response.data.rides});
			this.displayTweets();
		})
			.catch(function (response) {
			console.log("error in loadRideDetails catch:", response);
		})
	}

  componentWillUpdate(nextProps) {
  	if (nextProps.originField !== this.props.originField || nextProps.destinationField !== this.props.destinationField) {
	  	this.loadRidesDetails(nextProps.destinationField);
	  }
  }


	displayTweets = () => {
		this.state.rides.forEach( (ride) => {
			this.state.titles.push(ride.title)
			this.state.seats.push(ride.available_seats)
			this.state.names.push(ride.user_first_name)
			this.state.ids.push(ride.id)
			this.state.avatars.push(ride.user_avatar)
			this.state.details.push(ride.details)
		})
	}

	render() {
		if (this.state.rides.length === 0) {
			return(
				<h3>Sorry.<br/>No rides match your search.</h3>
			)
		} else {

			return(
				<div className="ride-tweets">
					{this.state.rides.map(tile => (
				    <Card
				      padding={1}
				      style={styles.card}
				      key={tile.id}
				    >
			        <CardHeader
			        	style={styles.cardHeader}
			          title={tile.title}
			          subtitle={tile.user_first_name}
			          avatar={tile.user_avatar}
			          actAsExpander={true}
			          showExpandableButton={true}
			         />
		        	<CardText
		        		expandable={true}
		        		style={styles.color}>
		        		<h3><i className="fa fa-user marker-rides"></i> {tile.user_first_name}</h3>
		        		<h3>Number of seats available: <strong>{tile.available_seats}</strong></h3>
		        		<p><i className="fa fa-map-marker marker-rides"></i> {tile.details}</p>
		        		</CardText>
                  <CardActions
                    expandable={true}
                    style={styles.cardActions}>
                        <ModalWindow
                            title="Request a Seat!"
                            label="Request a Seat"
                            index="2" />
                  </CardActions>
				    </Card>
				    ))}
				  </div>
			);
		}
	}
}
