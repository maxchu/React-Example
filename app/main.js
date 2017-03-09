import React from 'react';
import ReactDOM from 'react-dom';

import ProductContent from './components/ProductContent';
import Navigator from './components/Navigator';
import myContent from './content.json'; //@TODO move the content to server side 

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: {},
      page: 0,
      total: 0,
      nextSubTitle: ''
    };
    this.title = myContent.title;
  }

  componentDidMount() {
    this.getContent();
  }

  getContent() {
    // initialise
    this.setState({
      content: myContent.content[0],
      page: 0,
      total: myContent.content.length,
      nextSubTitle: myContent.content[1].title
    });
  }

  nextPageHandler() {
    let p = this.state.page + 1;
    let nextSt = myContent.content[p + 1] !== undefined ? myContent.content[p + 1].title : '';
    this.setState({ content: myContent.content[p], page: p, nextSubTitle: nextSt });
  }

  prevPageHandler() {
    let p = this.state.page - 1;
    let nextSt = myContent.content[p + 1] !== undefined ? myContent.content[p + 1].title : '';
    this.setState({ content: myContent.content[p], page: p, nextSubTitle: nextSt });
  }

  render() {
    // render product page
    return (
      <div className="container product-intro">
        <h1>{this.title}</h1>
        <ProductContent content={this.state.content}/>
        <Navigator page={this.state.page} nextSubTitle={this.state.nextSubTitle} total={this.state.total} onPrevious={this.prevPageHandler.bind(this)} onNext={this.nextPageHandler.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('main'));

