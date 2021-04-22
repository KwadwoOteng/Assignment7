import { Route, Redirect } from "react-router-dom";
import { useUserStore } from "../context/state";

const ProtectedRoute = ({ path, component: Component }) => {
  const isLoggedIn = useUserStore((state) => state.user.isLoggedIn);

  return (
    <Routels
      path={path}
      render={() => {
        if (isLoggedIn) {
          return <Component />;
        } else {
          return <Redirect to="login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
