import React from 'react'
import PropTypes from 'prop-types'

const TestResultsItem = ({ minifig }) => (
  <li >
    {minifig}
  </li>
)

TestResultsItem.propTypes = {
  // onClick: PropTypes.func.isRequired,
  minifig: PropTypes.string.isRequired
}

export default TestResultsItem
