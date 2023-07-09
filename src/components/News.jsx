import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export default class News extends Component {

  constructor() {
    super();

    this.state = {
      articles: [],
      isLoading: true,
      page: 1
    };

  }

  PagintaionClick = async (event) => {
    this.setState({isLoading: true})

    let tempPage = this.state.page;
    if(event.target.value === "next"){
      tempPage++;
    }else{
      tempPage--;
    }

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fc4bab028eba48f6a198b9d5e1ab1a9e&page=${tempPage}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      page: tempPage,
      articles: parsedData.articles,
      maxPage: Math.ceil((parsedData.totalResults)/this.props.pageSize),
      isLoading: false
    })
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fc4bab028eba48f6a198b9d5e1ab1a9e&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles,
      isLoading: false
    })
  }

  render() {
    return (
      <div className="w-full py-4 bg-blue-100">
        {this.state.isLoading && <Loading/>}
        <h1 className="font-bold text-lg text-center m-4">
          NewsMonkey - Top Headlines{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        {!this.state.isLoading && this.state.articles.map((elem) => {
          return (
              <NewsItem
                key={elem.url}
                title={elem.title}
                desc={elem.description}
                imgUrl={elem.urlToImage}
                url={elem.url}
              />
              );
            })}
          </div>
          <div className="m-12 flex justify-between">
            <button disabled={this.state.page === 1} value="previous" onClick={this.PagintaionClick} className="bg-blue-800 text-white py-1 px-3 rounded-md disabled:opacity-50">&larr; Previous</button>
            <button disabled={this.state.page === this.state.maxPage} value="next" onClick={this.PagintaionClick} className="bg-blue-800 text-white py-1 px-3 rounded-md disabled:opacity-50">Next &rarr;</button>
          </div>
      </div>
    );
  }
}
