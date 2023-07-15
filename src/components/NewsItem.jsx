import React, { Component } from 'react'
import imagePlaceholder from "../image-placeholder.jpg"
import Badge from './Badge'

export default class NewsItem extends Component {
  render() {
    let {title, desc, imgUrl, url, author, date, source} = this.props;
    return (
    <div className="flex flex-col justify-between w-72 md:w-64 h-auto rounded shadow-2xl mx-auto cursor-pointer">
        <div>
          <Badge text={source}/>
          <img className="w-full max-h-48" src={imgUrl?imgUrl:imagePlaceholder} alt="" />
        </div>
        <div className="px-2">
          <div className="font-bold text-lg leading-tight line-clamp-2">{title}</div>
          <p className="text-gray-700 text-sm line-clamp-3 my-1">{desc}</p>
        </div>
        <div className="px-2 pb-4">
        <p className='text-gray-400 text-sm my-2'>{`By ${author?author:"Unknown"} on ${new Date(date).toDateString()}`}</p>
          <a target='balnk' href={url} className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 rounded cursor-pointer">Read More</a>
        </div>
    </div>
      
    )
  }
}
