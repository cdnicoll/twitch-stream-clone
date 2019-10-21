import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({input, label}) {
    return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // Above is the same as doing:
    <div className="field">
    <label>{ label }</label>
    <input {...input} />
    </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name='title' component={this.renderInput} label="Enter the Title" />
        <Field name='description' component={this.renderInput} label="Enter the description" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
