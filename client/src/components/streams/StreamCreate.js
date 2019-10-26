import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      //   <input
      //     onChange={formProps.input.onChange}
      //     value={formProps.input.value}
      //   />
      // Above is the same as doing:
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form'
      >
        <Field
          name='title'
          component={this.renderInput}
          label='Enter the Title'
        />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter the description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

// redux forms magic method
// rf always assumes everything is okay if an EMPTY object is returned
// rf will realize something is wrong if an object is returned (such as an error object)
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You need to enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You need to enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
