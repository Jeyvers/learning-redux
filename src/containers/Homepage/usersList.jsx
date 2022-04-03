import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import styled from 'styled-components';

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: blue;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
`;

const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 5em;
  img {
    width: 100%;
    height: 7em;
  }
`;

const UserName = styled.h3`
    font-size: 20px
   color: #000;
   margin: 0;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({ users }));
export const UsersList = (props) => {
  const { users } = useSelector(stateSelector);

  const isEmptyUsers = !users || (users && users.length === 0);

  if (isEmptyUsers) {
    return null;
  }

  return (
    <>
      <UsersContainers>
        {users.map((user, id) => {
          return (
            <UserWrapper key={id}>
              <UserImage>
                <img src={user.avatar} alt='' />
              </UserImage>
              <UserName>
                {user.first_name} {user.last_name}
              </UserName>
            </UserWrapper>
          );
        })}
      </UsersContainers>
    </>
  );
};
