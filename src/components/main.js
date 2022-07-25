
import React from "react";
import HornedBeast from "./HornedBeast ";
let arr = require('../data.json');

class Main extends React.Component{
  render(){
    return(
    <>
    {arr.map((item) => 
        {
            return (
                <HornedBeast  imgUrl={item.image_url} title={item.title} description={item.description} />
            )
        }
        )
    }
        </>
    )
  }
}
export default Main;
