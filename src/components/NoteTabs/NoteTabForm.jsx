import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';
import CustomInput from './CustomInput';


export const NoteTabForm = props => {
  const {
    closeHandler,
    open,
    openHandler,
    submitHandler
  } = props;

  const [tabContent, setTabContent] = useState({ title: '', content: '' });
  const { title, content } = tabContent;

  const handleInput = event => {
    const { target } = event;
    setTabContent(state => ({ ...state, [target.name]: target.value }));
  };

  const handleSubmit = () => {
    closeHandler();
    submitHandler(tabContent);
  };

  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      aria-labelledby='form-dialog-title'
    >
      <DialogContent>
        <Card>
          <CardHeader color='success'>
            <div>New Note</div>
          </CardHeader>
          <CardBody>
            <CustomInput
              changeHandler={handleInput}
              formControlProps={{ fullWidth: true }}
              inputProps={{
                name: 'title',
                required: true,
                value: { title }
              }}
              labelText='Title'
            />
            <CustomInput
              changeHandler={handleInput}
              formControlProps={{ fullWidth: true }}
              inputProps={{
                multiline: true,
                name: 'content',
                required: true,
                rows: 5,
                value: { content }
              }}
              labelText='Note'
            />
          </CardBody>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button color='inherit' onClick={closeHandler}>
          Cancel
        </Button>
        <Button color='inherit' onClick={handleSubmit} type='submit'>
          Save Note
        </Button>
      </DialogActions>
    </Dialog>
  );
};

NoteTabForm.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  openHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
};
