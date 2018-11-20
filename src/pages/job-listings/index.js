import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import Layout from '../../components/Layout'

const jobListingContainer = {
  borderWidth: '5px',
  borderColor: 'red',
  height: '80px'
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
        <h6>{neighborhood}</h6>
        <p>{datePosted}</p>
      </div>
    </div>
  </div>
)

export default class JobListingsPage extends React.Component {
  render() {
    const jobs = get(this.props, 'data.allJobListingsJson.edges', [])
    return (
      <Layout>
        <div className="container">
          <div className="row">
            {jobs.map(j => (
              <JobListing {...j.node} />
            ))}
          </div>
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
