import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import { customInputStyles } from './customInputStyles';


const useStyles = makeStyles(customInputStyles);

export default function CustomInput(props) {
  const {
    changeHandler,
    formControlProps,
    id,
    inputProps,
    // labelProps,
    labelText,
    error,
    success,
    value
  } = props;
  const classes = useStyles();
  const labelClasses = clsx({
    [` ${classes.labelRootError}`]: error,
    [` ${classes.labelRootSuccess}`]: success && !error
  });
  const underlineClasses = clsx({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true
  });
  const inputClasses = clsx({
    [classes.input]: true
  });
  let formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = clsx(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  const newInputProps = {
    maxLength: inputProps ? inputProps.maxLength : undefined,
    minLength: inputProps ? inputProps.minLength : undefined
  };
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={`${classes.labelRoot} ${labelClasses}`}
          htmlFor={id}
          // {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        onChange={changeHandler}
        classes={{
          disabled: classes.disabled,
          input: inputClasses,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
        inputProps={newInputProps}
        value={value}
      />
      {error ? (
        <Clear className={`${classes.feedback} ${classes.labelRootError}`} />
      ) : success ? (
        <Check className={`${classes.feedback} ${classes.labelRootSuccess}`} />
      ) : null}
    </FormControl>
  );
}

CustomInput.defaultProps = {
  formControlProps: PropTypes.shape({
    fullWidth: false
  }),
  inputProps: PropTypes.shape({
    multiline: false,
    type: 'text'
  })
};

CustomInput.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  formControlProps: PropTypes.shape({
    fullWidth: PropTypes.bool
  }),
  id: PropTypes.string.isRequired,
  inputProps: PropTypes.shape({
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    multiline: PropTypes.bool,
    name: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.string,
    value: PropTypes.string
  }),
  labelText: PropTypes.string,
  // labelProps: PropTypes.shape,
  error: PropTypes.bool,
  success: PropTypes.bool
};
