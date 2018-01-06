import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const CREATE_SHORT_LINK_MUTATION = gql`
    mutation CreateLinkMutation($url: String!, $description: String!, $hash: String!) {
        createLink(url: $url, description: $description, hash: $hash) {
            id
        }
    }
`;

class CreateShortLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      url: ''
    };
  }

  createShortLink = async () => {
    // create a short link here.
  }

  render () {
    return (
      <div>
        <input
          id="url"
          tpye="text"
          value={this.state.url}
          placeholder="Link URL"
          onChange={e => this.setState({ url: e.target.value })}
        />
        <input 
          id="description"
          type="text"
          value={this.state.description}
          placeholder="Link Description"
          onChange={e => this.setState({ description: e.target.value })}
        />
        <button onClick={() => this.createShortLink()}>Create</button>
      </div>
    )
  }
}

export default graphql(CREATE_SHORT_LINK_MUTATION, {
  name: 'createShortLinkMutation',
})(CreateShortLink);