import { gql } from 'apollo-boost';
import * as React from 'react';
import { Query } from 'react-apollo';

const userQuery = gql`
  {
    user(id: 0) {
      id
      firstName
      lastName
    }
  }
`;

const User = () => {
  return (
    <Query query={userQuery}>
    {
      ({ loading, data: { user }, error }) => {
        if(loading) {
          return <div>Loading...</div>;
        }
        if(error) {
          return <div>Error</div>;
        }

        return (
          <div>{user.id}: { user.firstName } { user.lastName }</div>
        );
      }
    }
    </Query>
  );
};

export default User;

