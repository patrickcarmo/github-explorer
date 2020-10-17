import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface UserParams {
  user: string;
}

const User: React.FC = () => {
  const { params } = useRouteMatch<UserParams>();

  return <h1>User: {params.user}</h1>;
};

export default User;
