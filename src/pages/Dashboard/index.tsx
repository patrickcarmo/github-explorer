import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on Github</Title>

      <Form>
        <input placeholder="Type the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars3.githubusercontent.com/u/29663302?s=400&u=cde757625d1616cb3474e6f07aa8156565e45408&v=4"
            alt="Patrick Carmo"
          ></img>
          <div>
            <strong>patrickcarmo/github-expolorer</strong>
            <p>Using React to consume Api from Github.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
