import React from 'react';
import { Container } from '@mui/material';
import BookDetails from '@components/BookDetails';
import Reviews from '@components/Reviews';

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <BookDetails />
      <Reviews />
    </Container>
  );
};

export default App;
