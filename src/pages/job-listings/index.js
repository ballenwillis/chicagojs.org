import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import Layout from '../../components/Layout'

const container = {
  marginTop: '16px',
  alignItems: 'center'
}

const jobListingContainer = {
  alignSelf: 'center',
  align: 'center',
  borderWidth: '5px',
  borderColor: 'red',
  height: '80px',
  maxWidth: '700px'
}

const rightText = {
  textAlign: 'right'
}

const JobListing = ({ neighborhood, position, datePosted, positionType, jobLink }) => (
  <div className="col-sm-12" style={jobListingContainer}>
    <div className="row" style={{ justifyContent: 'space-between' }}>
      <div>
        <a href={jobLink}>
          <h6>{position}</h6>
        </a>
        <p>{positionType}</p>
      </div>
      <div>
        <h6 style={rightText}>{neighborhood}</h6>
        <p style={rightText}>{datePosted}</p>
      </div>
    </div>
  </div>
)

export default class JobListingsPage extends React.Component {
  render() {
    const jobs = get(this.props, 'data.allJobListingsJson.edges', [])
    return (
      <Layout>
        <div className="container" style={container}>
          {jobs.map(j => (
            <JobListing {...j.node} />
          ))}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query JobListingsQuery {
    allJobListingsJson {
      edges {
        node {
          neighborhood
          position
          datePosted
          positionType
          jobLink
        }
      }
    }
  }
`
