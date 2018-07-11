import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'
import { HttpLink } from 'apollo-link-http';

const DEFAULT_ENDPOINT = 'https://api.graph.cool/simple/v1/swapi';

/**
 * Override default Apollo link in order to force credentials value to "include" in order to allow
 * cookie credentials to be passed.
 *
 * @param {*} session
 */
function createApolloLink(session) {
  const link = new HttpLink({
    uri: session.endpoint,
    headers: session.headers,
    credentials: 'include'
  });

  return { link };
}

class ChromeGraphqlPlayground extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Playground endpoint={this.props.endpoint} createApolloLink={createApolloLink} />
      </Provider>
    );
  }
}

ReactDOM.render(
  <ChromeGraphqlPlayground endpoint={DEFAULT_ENDPOINT} />,
  document.body
);
