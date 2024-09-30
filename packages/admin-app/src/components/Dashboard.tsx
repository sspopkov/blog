import React from 'react';
import styled from 'styled-components';
import { Button } from 'shared-components';

const Main = styled.main`
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h2`
  margin-top: 0;
`;

const Dashboard: React.FC = () => {
  return (
    <Main>
      <Heading>Welcome to the Admin Dashboard</Heading>
      <p>This is where you can manage your blog platform.</p>
      {/* Here you can add more components or features */}
      <Button onClick={() => alert('Admin action')}>Action</Button>
    </Main>
  );
};

export default Dashboard;
