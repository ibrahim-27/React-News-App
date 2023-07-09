import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className='bg-blue-800 flex flex-col gap-2 items-center py-2 px-4 lg:flex-row lg:justify-between'>
        <div>
            <h1 className='font-bold text-2xl text-blue-100'><a href="/">NewsMonkey</a></h1>
        </div>
        <div>
            <ul className='flex gap-6 text-blue-100'>
                <li className='text-lg'>Home</li>
                <li className='text-lg'>News</li>
                <li className='text-lg'>About</li>
            </ul>
        </div>
        <div className='flex gap-2 items-center'>
            <input className='border px-1 h-6' type="text" placeholder='Search here' />
            <button className='border bg-blue-100 text-blue-800 px-2 rounded-md'>Search</button>
        </div>
      </div>
    )
  }
}
