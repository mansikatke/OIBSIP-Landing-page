import React from "react";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      kelvin: 0,
      fahrenheit: 0,
    };
  }

  convertCelsiusToOther(event) {
    if (event.target.value === 0) {
      this.setState({
        celsius: 0,
        kelvin: 0,
        fahrenheit: 0,
      });
    } else {
      this.setState({
        celsius: Number(event.target.value),
        kelvin: Number(event.target.value) + 273.15,
        fahrenheit: Number(event.target.value) * 1.8 + 32,
      });
    }
  }

  convertKelvinToOther(event) {
    if (event.target.value === 0) {
      this.setState({ 
        celsius: 0,
        kelvin: 0,
        fahrenheit: 0,
      });
    } else {
      this.setState({
        celsius: Number(event.target.value) - 273.15,
        kelvin: Number(event.target.value),
        fahrenheit: (Number(event.target.value) - 273.15) * 1.8 + 32,
      });
    }
  }

  convertFahrenheitToOther(event) {
    if (event.target.value === 0) {
      this.setState({
        celsius: 0,
        kelvin: 0,
        fahrenheit: 0,
      });
    } else {
      this.setState({
        celsius: ((Number(event.target.value) - 32 ) * (5/9)),
        kelvin: ((Number(event.target.value) - 32) * (5 / 9)) + 273.15,
        fahrenheit: Number(event.target.value),
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Temperature Converter</h2>
        <div className="input-block">
          <label>Celsius</label>
          <input
            value={this.state.celsius}
            onChange={this.convertCelsiusToOther.bind(this)}
          ></input>
        </div>
        <div className="input-block">
          <label>Kelvin</label>
          <input value={this.state.kelvin} onChange={this.convertKelvinToOther.bind(this)}></input>
        </div>
        <div className="input-block">
          <label>Fahrenheit</label>
          <input value={this.state.fahrenheit} onChange={this.convertFahrenheitToOther.bind(this)}></input>
        </div>
      </div>
    );
  }
}

export default Converter;
