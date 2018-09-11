import React from 'react'
import { connect } from 'react-redux'
import { chooseFig } from '../actions/choose_minifig'

const ChooseMovie = ({ dispatch }) => {
  let select
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        console.log(this, e)
        if (!select.value.trim()) {
          return
        }
        dispatch(chooseFig(select.value))
        select.value = 'Thor'
      }}>
        <select id="selectTest" ref={node => select = node}>
          <option value="Thor"> Thor</option>
          <option value="Iron Man"> Iron Man</option>
        </select>

        <button type="submit">
          Choose
        </button>
      </form>
    </div>
  )
}

export default connect()(ChooseMovie)
