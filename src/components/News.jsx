import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import Navbar from "./Navbar";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      isLoading: true,
      page: 1,
      totalResults: 0
    };
  }

  SearchNews = async (query) => {
    if(query === ""){return};
    this.setState({ isLoading: true });
    const url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=4b5225d202724853af970a37a34574d6&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      isLoading: false,
      totalResults: parsedData.totalResults
    });
  };

  fetchMoreData = async() => {
    let tempPage = this.state.page;
    tempPage++;    
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fc4bab028eba48f6a198b9d5e1ab1a9e&page=${tempPage}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      isLoading: false,
      totalResults: parsedData.totalResults,
      page: tempPage
    });
  };

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fc4bab028eba48f6a198b9d5e1ab1a9e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      isLoading: false,
      totalResults: parsedData.totalResults
    });
  }

  render() {
    let categoryToDisplay = this.props.category;
    if (categoryToDisplay !== "general") {
      document.title = `NewsMonkey - ${categoryToDisplay}`;
    } else {
      document.title = "NewsMonkey";
    }

    return (
      <>
        <Navbar search={this.SearchNews} />
        <div className="w-full py-4 bg-blue-100">
          {this.state.isLoading && <Loading />}
          <h1 className="font-bold text-lg text-center mt-48 md:mt-28 lg:mt-12">
            NewsMonkey - Top Headlines
          </h1>
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Loading/>}
            >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
              {!this.state.isLoading &&
                this.state.articles &&
                this.state.articles.map((elem) => {
                  return (
                    <NewsItem
                      key={elem.url}
                      title={elem.title}
                      desc={elem.description}
                      imgUrl={elem.urlToImage}
                      url={elem.url}
                      author={elem.author}
                      date={elem.publishedAt}
                      source={elem.source.name}
                    />
                  );
                })}
          </div>
            </InfiniteScroll>
        </div>
      </>
    );
  }
}
