import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PostCard = styled(Card)`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Posts: React.FC = () => {
  return (
    <PostsContainer>
      <PostCard>
        <CardContent>
          <Typography variant="h6">Post Title</Typography>
          <Typography variant="body2" color="textSecondary">
            This is the content of the post.
          </Typography>
        </CardContent>
      </PostCard>
      {/* You can add more posts here */}
    </PostsContainer>
  );
};

export default Posts;
