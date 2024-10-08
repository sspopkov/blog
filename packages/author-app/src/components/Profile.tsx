import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import styled from 'styled-components';
import { Button } from 'shared-components';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const Profile: React.FC = () => {
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledAvatar
          src="https://via.placeholder.com/100"
          alt="Author Avatar"
        />
        <Typography variant="h5" component="div">
          John Doe
        </Typography>
        <Typography variant="body2" color="textSecondary" marginBottom={2}>
          This is the author's bio.
        </Typography>
        <Button onClick={() => alert('Author action')}>Action</Button>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Profile;
