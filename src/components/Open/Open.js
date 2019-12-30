import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPokemon } from "../../ducks/reducer";

const Open = props => {
	if (props.isLoggedIn === false) {
		props.history.push("/");
	}

	return (
		<div className="open">
			<div className="background">
				<div className="camera-ring">
					<Link to="/">
						<div className="camera-circle" />
					</Link>
				</div>
				<div className="circles-container">
					<div className="little-circle red" />
					<div className="little-circle yellow" />
					<div className="little-circle green" />
				</div>
				<div className="inside">
					<h1>Welcome, {props.username}</h1>
					{props.isLoading
						? "Loading"
						: props.pokemon.results.map(ele => {
								return <h3 key={ele.name}>{ele.name}</h3>;
						  })}
					<button onClick={() => props.getPokemon(props.pokemon.previous)}>
						{"<<<"}
					</button>
					<button onClick={() => props.getPokemon(props.pokemon.next)}>
						{">>>"}
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = store => {
	return store;
};

export default connect(mapStateToProps, { getPokemon })(Open);
