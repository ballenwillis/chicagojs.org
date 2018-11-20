import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import Layout from '../../components/Layout'

const container = {
  borderWidth: '5px',
  borderColor: 'red',
  height: '80px',
  backgroundColor: 'green'
}

const JobListing = ({ neighborhood, position, datePosted, positionType, jobLink }) => (
  <div className="col-sm-12" style={container}>
    <div className="row">
      <div align="left">
        <a href={jobLink}>
          <h6>{position}</h6>
        </a>
      </div>
      <div align="right">
        <h6>{neighborhood}</h6>
      </div>
    </div>
    <div className="row">
      <h6>{positionType}</h6>
      <h6>{datePosted}</h6>
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
