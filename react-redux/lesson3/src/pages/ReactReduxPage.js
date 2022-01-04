import React from 'react';
import { connect } from 'react-redux'

@connect(
  // mapStateToProps
  (state) => ({ state })
)
export default class ReactReduxPage extends React.Component {
  render () {
    return (
      <>
        <div>
          ReactReduxPage
        </div>
        <p>{state}</p>
      </>
    )
  }
}