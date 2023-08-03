import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: '',
    pageSize: 8,
    category: 'general',
    apiKey: process.env.REACT_APP_NEWS_API
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  article = [];

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      totalResults: 0,
      loading: true,
      page: 1,
    };
    document.title = `Google News - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - Latest`;
  }

//   async updateNews(pageNo){
//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e15439ec0d948f2bb4e5e16c6ba81cc&page=${this.state.page}&pageSize=8&language=en`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(25);
//     let parsedData = await data.json();
//     this.props.setProgress(60);
//     this.setState({
//       article: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//   })
//     this.props.setProgress(100);
// }

  async componentDidMount() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=8&language=en`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(25);
    let parsedData = await data.json();
    this.props.setProgress(60);
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
  })
    this.props.setProgress(100);
  }

  // handlePreviousClick = async () => {
  //   this.setState({page: this.state.page-1});
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   this.setState({page: this.state.page+1});
  //   this.updateNews();
  // };

  fetchMoreData=async()=>{
    // this.setState({ page: this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e15439ec0d948f2bb4e5e16c6ba81cc&page=${this.state.page+1}&pageSize=8&language=en`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page+1,
      article: this.state.article.concat(parsedData.articles) ,
      totalResults: this.state.totalResults,
      loading: false,})
  }

  render() {
    return (
      <>
      <div className="container-my-3" style={{ textAlign: 'left', margin:"auto", width:"50%", marginTop: "50px"}}>
        <div className="news-mx-3">
          <p className="text-center my-3 fs-1 fw-bold">{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</p>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchMoreData}
            hasMore={this.state.article.length <= this.state.totalResults}
            loader={<Spinner/>}
          >
          <div className='container'>
          <div className="row my-3">
            {this.state.article.map((element) => {
                return (
                  <>
                    <div className="col-md-12" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : ''}
                        description={element.description? element.description.slice(0, 150): ''}
                        imageUrl={element.urlToImage? element.urlToImage: 'https://www.techexplorist.com/wp-content/uploads/2023/07/asteroid-Dimorphos.jpg'}
                        newsUrl={element.url}
                        author={element.author ? element.author : 'Unknown'}
                        date={element.publishedAt ? element.publishedAt : 'NA'}
                        source={element.source.name ? element.source.name : 'NA'}
                      />
                    </div>
                  </>
                );
              })}
          </div>
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-primary"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                Math.ceil(this.state.totalResults / 15) < this.state.page + 1
              }
              type="button"
              className="btn btn-primary"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
        </div>
      </div>
      </>
    );
  }
}

export default News;
