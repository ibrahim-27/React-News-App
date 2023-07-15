import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  constructor(){
    super();
    this.sate = {queryText: ""};
  }

  OnSearchBarChange = (event) => {
    this.setState({
      queryText: event.target.value
    })
  }

  OnSearchClick = () => {
    if(!this.state){
      this.props.search("");
      return;
    }
    this.props.search(this.state.queryText);
  }

  render() {
    return (
      <div className='bg-blue-800 flex flex-col gap-2 items-center py-2 px-4 fixed w-full lg:flex-row lg:justify-between'>
        <div>
          <h1 className='font-bold text-2xl text-blue-100'>
            <Link to="/">NewsMonkey</Link>
          </h1>
        </div>
        <div>
          <ul className='flex flex-wrap gap-6 text-blue-100'>
            <li className='text-lg hover:underline'>
              <Link to="/">Home</Link>
            </li>
            <li className='text-lg hover:underline'>
              <Link to="/business">Business</Link>
            </li>
            <li className='text-lg hover:underline'>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li className='text-lg hover:underline'>
              <Link to="/health">Health</Link>
            </li>
            <li className='text-lg hover:underline'>
              <Link to="/science">Science</Link>
            </li>
            <li className='text-lg hover:underline'>
              <Link to="/sports">Sports</Link>
            </li>
            <li className='text-lg hover:underline'>
              <Link to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-2 items-center'>
          <input onChange={this.OnSearchBarChange} className='border px-1 h-6' type="text" placeholder='Search here' />
          <button onClick={this.OnSearchClick} className='border bg-blue-100 text-blue-800 px-2 rounded-md'>Search</button>
        </div>
      </div>
    );
  }
}
