import React, { useState } from 'react';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CustomInput from './CustomInput';
import CardHeader from '../Card/CardHeader';


export const ToggleableForm = props => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <>
      <IconButton aria-label='add' onClick={handleOpen}>
        <AddCircleIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogContent>
          <form onSubmit={props.handleSubmit}>
            <Card>
              <CardHeader color='success'>
                <div>New Note</div>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText='Title'
                  id='first2'
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText='Your Note'
                  id='message2'
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                  }}
                />
              </CardBody>
            </Card>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button type='submit' onClick={handleClose} color='primary'>
            Save Note
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
