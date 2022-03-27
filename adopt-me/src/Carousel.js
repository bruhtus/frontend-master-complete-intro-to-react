import { Component } from 'react';

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      active: 0,
    };
  }

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleIndexClick = (event) => {
    this.setState({
      // `image.target` is the <img> tag below.
      // `dataset.index` is from `data-index`, if we have `data-yeah` it would
      // be `dataset.yeah`.
      // `+` is to convert this into a number, the result would be string so we
      // need to convert this into a number.
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => {
            return (
              <img
                key={photo}
                src={photo}
                data-index={index}
                onClick={this.handleIndexClick}
                className={index === active ? 'active' : ''}
                alt="animal thumbnail"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
