import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { Header, Repositories, Users } from './styles';

interface UserParams {
  user: string;
}

interface RepositoryInfo {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
}

interface UsersInfo {
  login: string;
  avatar_url: string;
  url: string;
  name: string;
  location: string;
}

const User: React.FC = () => {
  const { params } = useRouteMatch<UserParams>();

  const [user, setUser] = useState<UsersInfo | null>(null);
  const [repositories, setRepositories] = useState<RepositoryInfo[]>([]);

  useEffect(() => {
    async function loadData() {
      const users$ = api.get(`users/${params.user}`);
      const repositories$ = api.get(`users/${params.user}/repos`);

      const [users, repositories] = await Promise.all([
        users$,
        repositories$
      ]);

      setUser(users.data);
      setRepositories(repositories.data);
    }

    loadData();
  }, [params.user]);

  return (
    <React.Fragment>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
        <FiChevronLeft size={20} />Voltar</Link>
      </Header>

      {user &&
        <Users>
          <header>
            <img src={user.avatar_url} alt={user.name}/>
            <div>
              <strong>{user.login}</strong>
              <p>{user.name}</p>
              <p>{user.location}</p>
            </div>
          </header>
        </Users>
      }


      <Repositories>
        {!!repositories?.length && repositories.map((repository) => (
          <a key={repository.name} href={repository.html_url}>
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
              <p>{repository.language}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </React.Fragment>
  );
};

export default User;
