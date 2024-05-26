import React, { Component } from 'react';
import Newsitem from './Newsitem';




export class News extends Component {

  articles=[
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Margaret Brennan",
    "title": "Diplomatic efforts for Israel-Hamas hostage talks expected to resume next week, sources say - CBS News",
    "description": "U.S. diplomatic efforts to broker a deal to release hostages held in Gaza by Hamas and other allied groups are expected to continue in the coming week, two sources with knowledge told CBS News.",
    "url": "https://www.cbsnews.com/news/diplomatic-efforts-israel-hamas-hostage-talks-expected-resume-next-week-sources/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/05/25/2ac61176-1eac-4f38-96e3-96d48338c673/thumbnail/1200x630/6bf8df2176e01e13bed4946696697055/ap24146059425206.jpg?v=83093a0dd27502f0a52cd68b1c5b8b6e",
    "publishedAt": "2024-05-25T23:43:17Z",
    "content": "Negotiations between Israel and Hamas to reach a deal to free Israeli hostages held in the Gaza Strip are expected to resume next week, two sources with knowledge told CBS News on Saturday. Negotiato… [+2761 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": "",
    "title": "Tyrese Haliburton injury update: Pacers guard expected to miss Game 3 vs. Celtics after hurting hamstring - CBS Sports",
    "description": "Haliburton missed extended time during the regular season with an injury to the same hamstring",
    "url": "https://www.cbssports.com/nba/news/tyrese-haliburton-injury-update-pacers-guard-expected-to-miss-game-3-vs-celtics-after-hurting-hamstring/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/05/24/5338aeb5-4e1a-4a78-ac46-51dc72d40200/thumbnail/1200x675/04357db4afb9232e9ff2dc459da007c4/haliburton-usatsi-1.png",
    "publishedAt": "2024-05-25T23:19:00Z",
    "content": "Indiana Pacers guard Tyrese Haliburton suffered a hamstring injury during Thursday night's 126-110 loss to the Boston Celtics in Game 2 of the Eastern Conference finals, and now he is expected to mis… [+2704 chars]"
    },
    
  ]
 

  
  

  constructor() {
    super();
    this.state={
      articles: this.articles,
      page: 1,
      loading: false,
    }
    // console.log(this.state.articles[0].description);
    // componentDidMount();

  }

  handleprevClick= async ()=>{
    console.log(this.state.totalArticles/9);
    console.log(this.state.page);
    if(this.state.page-1 < 1) {
      return;
    }
    else{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=b7d500003d5a41e188ee292eb014f5ea&page=${this.state.page-1}&pageSize=9`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parseddata= await data.json();
    this.setState({
      articles: parseddata.articles,
      page: this.state.page-1,
      loading: false,
    });
  }
  }

  handlenextClick = async ()=> {
    console.log(this.state.totalArticles/9);
    console.log(this.state.page+1);
    

    if(this.state.page+1 > Math.ceil(this.state.totalArticles/9)) {
      return;
    }
    else{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=b7d500003d5a41e188ee292eb014f5ea&page=${this.state.page+1}&pageSize=9`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parseddata= await data.json();
    this.setState({
      articles: parseddata.articles,
      page: this.state.page+1,
      loading: false,

    });
    console.log(this.state.page);
  }

  }

  
  async componentDidMount(){
    let url ='https://newsapi.org/v2/top-headlines?country=in&apiKey=b7d500003d5a41e188ee292eb014f5ea&page=1&pageSize=9';
    let data= await fetch(url);
    let parseddata= await data.json();
    this.setState({
      articles: parseddata.articles,
      totalArticles: parseddata.totalResults
    });
    console.log(parseddata.totalResults);
  }

  render() {
    
    return (
        <div className='container my-3'>
          <h2> News Brocolli Headlines</h2>
            <div className='row'> 
            {this.state.articles.map((element)=> {

              console.log("polo");
              return ( 
              <div className='col-md-4' key={element.url? element.url: ""}>
                <Newsitem title={element.title? element.title.slice(0,45): ""} imageUrl={element.urlToImage ? element.urlToImage : "https://assets1.cbsnewsstatic.com/hub/i/r/2024/05/25/2ac61176-1eac-4f38-96e3-96d48338c673/thumbnail/1200x630/6bf8df2176e01e13bed4946696697055/ap24146059425206.jpg?v=83093a0dd27502f0a52cd68b1c5b8b6e"} description= {element.description? element.description: ""} newsUrl= {element.url} />
              </div>
            
   
  );
    })}
            </div>
            <div className="d-flex justify-content-between" > 
            <button type="button" className="btn btn-dark" onClick={this.handleprevClick} >&laquo; Prev</button>
            <button type="button" className="btn btn-dark" onClick={this.handlenextClick} >Next &raquo; </button>
            </div>
        </div>
        
      
    )
  }
}

export default News