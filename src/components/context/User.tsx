export const User2 = () => {
  const handleLogin = () => {};
  const handleLogout = () => {};
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <p>User name is {user?.name}</p>
      <p>User email is {user?.email}</p> */}
    </div>
  );
};
