import React from 'react';
import PropTypes from 'prop-types';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

import { NoteTabForm } from './NoteTabForm';


export const ToggleableNoteTabForm = props => {
  const {
    closeHandler,
    open,
    openHandler,
    submitHandler
  } = props;

  return (
    <>
      <IconButton
        aria-label='add'
        disableFocusRipple
        disableRipple
        onClick={openHandler}
      >
        <AddCircleIcon />
      </IconButton>
      <NoteTabForm
        closeHandler={closeHandler}
        open={open}
        openHandler={openHandler}
        submitHandler={submitHandler}
      />
    </>
  );
};

ToggleableNoteTabForm.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  openHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
};
