import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Converter</h1>
        Enter Knots: <input type="number" value={this.props.knots} onChange={(e) => this.props.onChange(e)}></input>
        <br /><br />

        <select value={this.props.unitSelect} name="units" id="units" onChange={(e) => this.props.onSelect(e)}>
          <option value="kmph">Km/H</option>
          <option value="mph">M/h</option>
        </select>

        <button onClick={this.props.onConversion}>Convert</button>
        <h6>{this.props.result}</h6>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    knots: state.knots,
    kmph: state.kmph,
    mph: state.mph,
    unitSelect: state.unitSelect,
    result: state.result
  };
};

const mapDispachToProps = dispatch => {
  return {
    onConversion: () => dispatch({ type: "CONVERT" }),
    onChange: (e) => dispatch({ type: "ON_CHANGE", value: e.target.value }),
    onSelect: (e) => dispatch({ type: "ON_SELECT", value: e.target.value })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
