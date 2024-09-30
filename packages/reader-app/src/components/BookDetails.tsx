import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;

const BookDetails: React.FC = () => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div">
          The Great Gatsby
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Author: F. Scott Fitzgerald
        </Typography>
        <Typography variant="body2" color="textSecondary">
          A classic novel of the Jazz Age.
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default BookDetails;
