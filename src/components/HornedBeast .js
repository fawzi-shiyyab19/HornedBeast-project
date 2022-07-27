import React from "react";
import Card from "react-bootstrap/Card";
import SelectedBeast from "./SelectedBeast";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
      beastSrc: this.props.src,
      beastAlt: this.props.alt,
      beastTitle: this.props.title,
      beastDescription: this.props.description,
    };
  }

  handleFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1,
    });
  };

  render() {
    return (
      <Card style={{ margin: "0 auto", width: "80%", height: "100%" }}>
        <Card.Img
          variant="top"
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.handleFavorite}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
          </div>
          <p> ❤ : {this.state.favorite}</p>

          <SelectedBeast
            src={this.state.beastSrc}
            alt={this.state.beastAlt}
            title={this.state.beastTitle}
            description={this.state.beastDescription}
            favorite={this.state.favorite}
            handleFavorite={this.handleFavorite}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;




