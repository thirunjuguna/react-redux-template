import React, { Component,PropTypes } from 'react'
import {connect } from 'react-redux';
import * as exampleActions from '../../actions/exampleActions';

class Example extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      example: {
        name: ''
      }
    };
    this.onClickSave = this.onClickSave.bind(this);

    this.onNameChange = this.onNameChange.bind(this);

  }

  onNameChange(e) {
    const example = this.state.example;
    example.name = e.target.value;
    this.setState({example: example});
  }

  onClickSave() {
    this.props.dispatch(exampleActions.createExample(this.state.example));
  
  }

  exampleRow(example,index){
return <div key={index}>{example.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Examples</h1>
        {this.props.examples.map(this.exampleRow)}
        <h2>Add New Example</h2>
        <input
          type="text"
          onChange={this.onNameChange}
          value={this.state.example.name}/>
        <input
          type="submit"
         onClick={this.onClickSave}
          value="Save"/>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return{
    examples:state.examples
  };
}

export default connect(mapStateToProps)(Example);