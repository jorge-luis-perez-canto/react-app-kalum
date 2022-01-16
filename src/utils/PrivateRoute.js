import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	return (
		<Route
			{...rest}
			render={(props) =>
				loggedIn === true ? (
					<Component {...props}></Component>
				) : (
					<Redirect to="/login"></Redirect>
				)
			}
		></Route>
	);
}
