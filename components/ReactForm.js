import React from "react";


class ReactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      lastNamefirstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("clicked");
    console.log(event.target.name);
    console.log(event.target.value);

    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="Enter your first name "
          onChange={this.handleChange}
        />
        <br />

        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Enter your last name "
          onChange={this.handleChange}
        />
        <br />

        <textarea value={"Some default value"} onChange={this.handleChange} />

        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          Is Friendly?
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>

        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>

        <br />
        <label>
          <select
            value={this.state.favColor}
            name="favColor"
            onChange={this.handleChange}
          >
            <option value="Red"> Red</option>
            <option value="Blue"> Blue</option>
            <option value="Green"> Green</option>
          </select>
        </label>
        <div>
          <br />
          Your name is : {this.state.firstName} {this.state.lastName} <br />
          You are {this.state.isFriendly == true ? "very" : "not"} friendly
          <br />
          You are {this.state.gender} <br />
          Your favorite color is {this.state.favColor}
        </div>
      </form>
    );
  }
}

export default ReactForm;
