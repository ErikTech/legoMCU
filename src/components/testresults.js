import React from 'react'
import PropTypes from 'prop-types'
import TestResultsItem from './testResultsItem'

const TestResults = ({ herolist }) => (
  <ul>
    {herolist.map(hero =>
      <TestResultsItem
        key={hero.name}
        {...hero}
      />
    )}
  </ul>
)

TestResults.propTypes = {
  herolist: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TestResults
