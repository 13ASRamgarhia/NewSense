import React, { Component } from 'react'
import axios from 'axios';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import Categories from './Categories';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'General',
        page: 1,
        pageSize: 5
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        page: PropTypes.number,
        apiKey: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor(props){
        super(props);
        this.state = {
            news: [],
            isLoading: false,
            page:1,
            totalArticles: 0,
            lastPage: false,
        }

        document.title = `${this.props.category} news - NewsSense`
    }

    fetchMoreData = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
            .then((result) => this.setState({news: this.state.news.concat(result.data.articles), isLoading: false}))
            .catch((error) => console.log(error))
    
        this.setState({page: this.state.page + 1})
    }

    componentDidMount(){
        this.setState({isLoading: true, mainDivStyle: {backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '10px', width: '90vw', paddingTop: '1em', paddingBottom: '1em', position: 'relative', top: '4.25em', bottom: '2em'}})

        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`)
        .then((result) => this.setState({news: result.data.articles, totalArticles: result.data.totalResults, isLoading: false}))
        .catch((error) => console.log(error))
    }

    render() {
        return (
            <>
            <Categories darkModeTheme={this.props.darkModeTheme} />    
            <div className='container-fluid my-3'  style={{backgroundColor: this.props.darkModeTheme ? 'rgba(17,24,39,0.7)' : 'rgba(255,255,255,0.5)', borderRadius: '10px', width: '90vw', paddingTop: '1em', paddingBottom: '1em', position: 'relative', top: '4.25em', bottom: '2em'}}>
            <h1 className='text-center' style={{fontWeight: 'bold', color: this.props.darkModeTheme ? '#fff' : '#000'}}>{`NewsSense - Top ${this.props.category} Headlines`}</h1>
            {this.state.isLoading && <Spinner/>}
            <InfiniteScroll
                dataLength={this.state.news.length}
                next={this.fetchMoreData}
                hasMore={this.state.news.length !== this.state.totalArticles}
                loader={<Spinner />}
                >
                <div className="container-fluid">
                    <div className="row">
                        {this.state.news.map((element) => (
                            <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title ? element.title : "..."} 
                                        description={element.description ? element.description : "..."}
                                        urlToImg={element.urlToImage ? element.urlToImage : 'https://media.discordapp.net/attachments/1053410736195518646/1053410803279208448/newsense-logo.png?width=763&height=572'}
                                        urlToNews={element.url  ? element.url : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539'}
                                        date={element.publishedAt ? element.publishedAt : '-'}
                                        author={element.author ? element.author : 'Unknown'}
                                        source={element.source ? element.source.name : 'Unknown'}
                                        darkModeTheme={this.props.darkModeTheme} />
                            </div>
                        ))}
                        {!this.state.news.length && (!this.state.isLoading &&
                        <div className='container text-center' style={{paddingBlock: '2em'}}>
                            <strong>Oh Snap! No news found. Sorry, we are working on it</strong>
                        </div>)}
                        {!this.state.isLoading && (this.state.news.length === this.state.totalArticles && <div className="container-fluid d-flex justify-content-around">
                            <strong style={{fontSize: '32px'}}>&#8205;</strong>
                            <strong style={{fontSize: '32px', color: this.props.darkModeTheme ? '#999' : '#000'}}>That's all we could find at the moment!</strong>
                            <strong style={{fontSize: '32px'}}>&#8205;</strong>
                        </div>)}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
        </>
        )
    }
    }

export default News;