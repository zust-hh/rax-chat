import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';
import { graphqlUri } from './config/index';
import { graphql } from 'graphql/graphql';
import {
  gql,
  ApolloProvider,
} from 'react-apollo';

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const httpLink = new HttpLink({
  uri: graphqlUri,
})

const client = new ApolloClient({
  link: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

const ChannelsList = ({ data: { loading, error, channels } }) => {
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return <ul>
    {channels.map(ch => <li key={ch.id}>{ch.name}</li>)}
  </ul>;
};

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.app}>
          <View style={styles.appHeader}>
            <Text style={styles.appBanner}>Welcome to Rax-GraphQL-demo</Text>
          </View>
          <ChannelsListWithData />
        </View>
      </ApolloProvider>
    );
  }
}

export default App;
