import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ReviewCard = styled(Card)`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Reviews: React.FC = () => {
  return (
    <ReviewsContainer>
      <ReviewCard>
        <CardContent>
          <Typography variant="h6">Jane Doe</Typography>
          <Typography variant="body2" color="textSecondary">
            An amazing read! The characters were well developed and the story
            was captivating.
          </Typography>
        </CardContent>
      </ReviewCard>
      {/* More reviews can be added here */}
    </ReviewsContainer>
  );
};

export default Reviews;
