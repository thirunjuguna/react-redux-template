import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as exampleActions from '../../actions/exampleActions';

function exampleRow(example, index) {
  return <div key={index}>{example.name}</div>;
}
class Example extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      example: {
        name: '',
      },
    };
    this.onClickSave = this.onClickSave.bind(this);

    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(e) {
    const { example } = this.state;
    example.name = e.target.value;
    this.setState({ example });
  }

  onClickSave() {
    const { dispatch } = this.props;
    const { example } = this.state;
    dispatch(exampleActions.createExample(example));
  }

  render() {
    const { example } = this.state;
    const { examples } = this.props;
    return (
      <div>
        <h1>Examples</h1>
        {examples.map(exampleRow)}
        <h2>Add New Example</h2>
        <input type="text" onChange={this.onNameChange} value={example.name} />
        <input type="submit" onClick={this.onClickSave} value="Save" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    examples: state.examples,
  };
}
Example.propTypes = {
  dispatch: PropTypes.func.isRequired,
  examples: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Example);
