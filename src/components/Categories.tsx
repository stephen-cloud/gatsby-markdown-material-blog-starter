import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import _ from 'lodash'
import { Button, Chip } from '@material-ui/core'

const Categories = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <>
      {data.allMarkdownRemark.group.map(category => (
        <Button key={category.fieldValue}>
          <Link
            to={`/${_.kebabCase(category.fieldValue)}`}
            key={category.fieldValue}
            activeClassName={props.activeClassName}
          >
            {category.fieldValue}
            <strong> ({category.totalCount})</strong>
          </Link>
        </Button>
      ))}
    </>
  )
}

export default Categories