import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { Error, Form, Title, Users } from './styles';

interface User {
  total_count: number;
  incomplete_results: boolean;
  items: UserItems[];
}

interface UserItems {
  login: string;
  avatar_url: string;
  type: string;
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState<UserItems[]>([]);
  const [inputError, setInputError] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newUser) {
      setInputError('Please type the user name');
      return;
    }

    try {
      const response = await api.get<User>(`search/users?q=${newUser}`);
      const repositoryItems = response.data.items;

      setUsers(repositoryItems);
      setNewUser('');

      !response.data.items.length
        ? setInputError(`User: ${newUser} not found`)
        : setInputError('');
    } catch (err) {
      setInputError('Please type the user name');
    }
  }

  return (
    <React.Fragment>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore users on Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Type the user name"
        />
        <button type="submit">Search</button>
      </Form>

      {!!inputError && <Error>{inputError}</Error>}

      <Users>
        {users.map((repository) => (
          <a key={repository.login} href="#">
            <img src={repository.avatar_url} alt={repository.login}></img>
            <div>
              <strong>{repository.login}</strong>
              <p>{repository.type}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Users>
    </React.Fragment>
  );
};

export default Dashboard;
