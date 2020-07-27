import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "",
      allMemeImages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount triggered");
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        console.log("Memes:::" + memes[0].id);
        this.setState({
          allMemeImages: memes,
          randomImg :memes[1].url
        });
      });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleClick() {
    console.log("button clicked");
    event.preventDefault();

    console.log(this.state.allMemeImages.length);
    const randomNumber = Math.floor(
      Math.random() * this.state.allMemeImages.length
    );
    const randomImage = this.state.allMemeImages[randomNumber].url;
    this.setState({
      randomImg: randomImage
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlelick}>
          <h1>Meme Generator Section</h1>
          <input
            type="text"
            placeholder="Enter topText"
            name="topText"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <input
            type="text"
            placeholder="Enter bottomText"
            name="bottomText"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <button onClick={this.handleClick}>Generate</button>
          <br />
          Top: {this.state.topText} <br />
          Buttom : {this.state.bottomText}
          <img src={this.state.randomImg} />
          
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
