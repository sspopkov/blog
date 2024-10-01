import React from 'react';
import { Container } from '@mui/material';
import Profile from '@components/Profile';
import Posts from '@components/Posts';

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Profile />
      <Posts />
    </Container>
  );
};

export default App;
