import React from "react";
import { Link } from "react-router-dom";
import { setUsername, login, getPokemon } from "../../ducks/reducer";
import { connect } from "react-redux";

const Cover = props => {
	const clickLogin = () => {
		props.login();
		props.getPokemon("https://pokeapi.co/api/v2/pokemon");
	};
	return (
		<div className="cover">
			<div className="background">
				<div className="camera-ring">
					<div className="camera-circle" />
				</div>
				<div className="circles-container">
					<div className="little-circle red" />
					<div className="little-circle yellow" />
					<div className="little-circle green" />
				</div>
				<div className="lid">
					<Link to="/open">
						<div className="triangle-button" onClick={() => clickLogin()} />
					</Link>
					<div className="inputs">
						<input
							placeholder="Username"
							type="text"
							onChange={e => props.setUsername(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

// * fiunction which returns whatever you want from redux state
const mapStateToProps = reduxState => {
	//  const {username} = reduxState
	//  return {username}
	return reduxState;
};

// * an object with any action builders we want to use in this component
const mapActionsToProps = {
	setUsername: setUsername,
	login: login,
	getPokemon
};

export default connect(mapStateToProps, mapActionsToProps)(Cover);
