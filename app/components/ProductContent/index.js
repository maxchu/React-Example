import React from 'react';

class ProductContent extends React.Component {
  render() {
    if (this.props.content.thumbnail === '' || this.props.content.thumbnail === undefined) {
      this.props.content.thumbnail = 'ipad-mini.jpg';
    }

    return (
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <img alt="iPad mini" className="img-responsive" src={'images/' + this.props.content.thumbnail} />
        </div>

        <div className="col-sm-12 col-md-8 col-lg-8" dangerouslySetInnerHTML={{ __html: this.props.content.description }}></div>
      </div>
    );
  }
}

export default ProductContent;
