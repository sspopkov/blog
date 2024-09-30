import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Admin Panel</Title>
    </HeaderContainer>
  );
};

export default Header;
