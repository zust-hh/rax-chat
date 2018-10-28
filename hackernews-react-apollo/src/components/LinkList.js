import React from 'react'
import Link from './Link'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// 1
const LINKS_QUERY = gql`
  {
    links {
      url
      description
    }
  }
`;

// 2
const LinkList = () => (
    <Query query={LINKS_QUERY}>
    {
        ({ loading, error, data }) => {
            // 1
            if (loading) {
                return <div>Loading</div>
            }

            // 2
            if (error) {
                return <div>Error</div>
            }

            // 3
            const linksToRender = data.links

            return (
                <div>
                    {linksToRender.map(link => (
                        <Link key={link.url} link={link}/>
                    ))}
                </div>
            )
        }
    }
    </Query>
)

// 3
export default LinkList;