import gql from 'graphql-tag';
import * as React from 'react';
import { 
  graphql
} from 'react-apollo';

interface Item {
  id: number;
  name: string;
};

interface IAppProps {
  items: Item[];
};


class App extends React.Component<IAppProps> {

  public render() {
    
    const { items } = this.props;
    
    return (
      <div>
        <ul>{items && items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
      </div>
    );
  }
}

const ITEM_QUERY = gql`
  query {
    item {
      id
      name
    }
  }
`;

const connectedApp = graphql(ITEM_QUERY)(App);

export default connectedApp;


