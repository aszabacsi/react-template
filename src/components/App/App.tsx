import gql from 'graphql-tag';
import * as React from 'react';
import { graphql } from 'react-apollo';

interface Item {
  id: number;
  name: string;
};

interface IAppProps {
  data: {
    items: Item[];
    refetch: () => void;
  }
};

const App = ({ data: { items, refetch } }: IAppProps) => {

  const handleRefresh = () => refetch();

  return (
    <div>
      <button onClick={handleRefresh}>Refresh</button>
      <ul>{items && items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  );
}

export default graphql(gql`
  query ItemAppQuery {
    item {
      id
      name
    }
  }
`)(App);
