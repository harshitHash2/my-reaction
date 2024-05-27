import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Loadingcard from './loadingcard';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';




export class News extends Component {
  

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'science'
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  articles=[]

  
 

  capitalizeFirstLetter= (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  

  constructor(props) {
    super(props);
    this.state={
      articles: this.articles,
      page: 1,
      loading: false,
      totalResults: 0,
      count1: 1
    }
  
    document.title= `${this.capitalizeFirstLetter(this.props.category)} - News Brocolli`;

  }

  

  
  async componentDidMount () {
    if( this.state.articles.length===0){
      this.updateNews();
    }
    
    
  }

  fetchMoreData= async ()=> {
    if (this.state.articles.length>= this.state.totalResults){
      return;
    }
    this.setState({ page: this.state.page+1 });
    console.log(this.state.page);
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86f962af266e4ad5861406ea65e1bbee&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    let data= await fetch(url);
    let parseddata= await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      // page: this.state.page+1,
      loading: false,
      // totalResults: parseddata.totalResults
    });
    
  }

  async updateNews() {
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86f962af266e4ad5861406ea65e1bbee&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parseddata= await data.json();
    this.setState({
      articles: parseddata.articles,
      // page: this.state.page+1,
      loading: false,
      totalResults: parseddata.totalResults
    });
    

  }
  
  

  render() {
    



    

    if (this.state.loading===true || this.state.articles.length===0){
      return <> 
      <div className='container my-3'>
      <div className='row'>
              
      <Loadingcard/>
      <Loadingcard/>
      <Loadingcard/>
      <Loadingcard/>
      <Loadingcard/>
      <Loadingcard/>
      <Loadingcard/>
      <Loadingcard/>
    
    </div>
    </div>
      </>
    }
    
    return (
        <div className='container my-3'>
          <h2 className='text-center' style={{margin: "40px 0px"}} > Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
          <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
              // inverse={true} //
              hasMore={this.state.articles.length <= this.state.totalResults}
              loader={<Loadingcard/>}
              scrollableTarget="scrollableDiv"
            >

              <div className='container'>

            <div className='row'> 
            {this.state.articles.map((element)=> {


              // console.log(this.state.count1);
              // this.state.count1= this.state.count1+1;
              // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
              console.log(element.url);
              
              return ( 
              <div className='col-md-4' key={element.url}>
                <Newsitem title={element.title? element.title.slice(0,45): ""} imageUrl={element.urlToImage ? element.urlToImage : "https://assets1.cbsnewsstatic.com/hub/i/r/2024/05/25/2ac61176-1eac-4f38-96e3-96d48338c673/thumbnail/1200x630/6bf8df2176e01e13bed4946696697055/ap24146059425206.jpg?v=83093a0dd27502f0a52cd68b1c5b8b6e"} description= {element.description? element.description: ""} newsUrl= {element.url} author={element.author} date={element.publishedAt} />
              </div>
              );
              })}
            </div>
            </div>
            </InfiniteScroll>
            
        </div>
        
      
    )
  }
};

export default News