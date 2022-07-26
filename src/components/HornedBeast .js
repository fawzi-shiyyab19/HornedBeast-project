
import React from "react";
import Card from 'react-bootstrap/Card';
import SelectedBeast from "./SelectedBeast";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
      }
    
      handleClick = () => {
        this.setState({
          count: this.state.count + 1,
        });
    }
    render() {
        return (
            <Card style={{ width: '18rem', display: 'inline-block' , margin:'1rem'}}>
                <Card.Img variant="top" src={this.props.imgUrl} style={{ hieght:'10vh' }} onClick={this.handleClick} />
                <Card.Body>
                <Card.Title>{this.props.title} ❤️ {this.state.count}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text>
                <SelectedBeast  src={this.props.imgUrl} description={this.props.description}  />
                </Card.Body>
            </Card>
        );
    }
}

export default HornedBeast;