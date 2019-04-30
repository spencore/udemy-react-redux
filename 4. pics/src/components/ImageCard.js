import React from 'react';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // added an EventListener an callback setSpans
    // so that we can get clientHeight after imgs are actually loaded
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    // each row is 10px high
    // as defined by grid-auto-rows css
    const spans = Math.ceil(height / 10);

    // don't need to say this.setState({spans: spans})
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
