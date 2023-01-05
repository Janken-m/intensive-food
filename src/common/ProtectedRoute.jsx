import { Route, Redirect } from "react-router-dom";
import React from "react";
import auth from "../Service/authService";

function ProtectedRoute({ path, component: Component, render }) {
  const user = auth.getCurrentUser();
  return (
    <Route
      path={path}
      render={(props) => {
        // console.log("protectedRoute", props);
        if (!user)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location.pathname },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
}

export default ProtectedRoute;
