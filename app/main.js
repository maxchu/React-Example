import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import ProductContent from './components/ProductContent';
import Navigator from './components/Navigator';
import * as contentService from './services/content-service';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: {},
      page: 0,
      total: 0,
      nextTitle: '',
    };
  }

  componentDidMount() {
    this.getContent();
  }

  getContent() {
    // initialise
    contentService.getJSON()
      .then(data => {
        this.setState({
          data: data,
          title: data.title,
          content: data.content[0],
          total: data.content.length,
          nextTitle: data.content[1].title
        });
    });
  }

  nextPageHandler() {
    let p = this.state.page + 1;
    let nextTxt = this.state.data.content[p + 1] !== undefined ? this.state.data.content[p + 1].title : '';
    this.setState({ content: this.state.data.content[p], page: p, nextTitle: nextTxt });
  }

  prevPageHandler() {
    let p = this.state.page - 1;
    let nextTxt = this.state.data.content[p + 1] !== undefined ? this.state.data.content[p + 1].title : '';
    this.setState({ content: this.state.data.content[p], page: p, nextTitle: nextTxt });
  }

  render() {
    // render product page
    return (
      <div className="container product-intro">
        <h1>{this.state.title}</h1>
        <ProductContent content={this.state.content}/>
        <Navigator page={this.state.page} nextTitle={this.state.nextTitle} total={this.state.total} onPrevious={this.prevPageHandler.bind(this)} onNext={this.nextPageHandler.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('main'));

