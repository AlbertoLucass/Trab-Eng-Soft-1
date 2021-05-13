import { Redirect, Route } from 'react-router-dom';
import { decode } from 'jsonwebtoken';

const isAuth = async () => {
  const token = localStorage.getItem('token');
  console.log(token);
  if (!token) {
    return false;
  }
  // @ts-ignore
  const { exp } = await decode(token, { complete: true });
  if (exp && Date.now() >= exp * 1000) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/admin',
            }}
          />
        )
      }
    />
  );
};
export { PrivateRoute };
