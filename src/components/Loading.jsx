import React, { Component } from 'react'
import loadingGif from './loading-gif.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='w-full'>
        <img className='w-16 m-auto' src={loadingGif} alt="" />
      </div>
    )
  }
}
