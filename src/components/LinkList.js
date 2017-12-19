import React from 'react'
import Link from './Link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends React.Component {
  render() {
    const { allLinksQuery } = this.props;

    if (allLinksQuery && allLinksQuery.loading) return <div>Loading</div>
    if (allLinksQuery && allLinksQuery.error) return <div>Error</div>

    const linksToRender = allLinksQuery.allLinks

    return (<div>{linksToRender.map(
      link => <Link key={link.id} link={link}/>
    )}</div>)
  }
}

const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(LinkList)
                                            //defaults to 'data'
