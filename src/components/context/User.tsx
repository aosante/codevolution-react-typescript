import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: 'Andres',
      email: 'some@email.com',
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User name is {userContext.user?.name}</p>
      <p>User email is {userContext.user?.email}</p>
    </div>
  );
};
