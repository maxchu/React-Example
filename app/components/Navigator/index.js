import React from 'react';

class Navigator extends React.Component {

  render() {
    return (
      <div className="row navigator">
        <div className="col-sm-2 col-md-4 col-lg-4">
          <a href="#" className={(this.props.page <= 0 ? 'hidden' : '')} onClick={this.props.onPrevious}>
            <span className="glyphicon glyphicon-triangle-left"></span>
          </a>
          <a href="#" className={(this.props.page <= 0 ? 'hidden' : '')} onClick={this.props.onPrevious}>Prev</a>
        </div>

        <div className="col-sm-10 col-md-8 col-lg-8 text-right">
          <a href="#" className={(this.props.page >= (this.props.total - 1) ? 'hidden' : '')} onClick={this.props.onNext}>{this.props.nextTitle}</a>
          <a href="#" onClick={this.props.onNext}>
            <span data-hidden={(this.props.page >= (this.props.total - 1) ? 'hidden' : '')} className="glyphicon glyphicon-triangle-right"></span>
          </a>
        </div>

      </div>
    );
  }
}

export default Navigator;
