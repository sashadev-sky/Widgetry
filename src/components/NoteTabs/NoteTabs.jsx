import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';
import { ToggleableNoteTabForm } from './ToggleableNoteTabForm';

import { noteTabStyles } from './noteTabStyles';

import { formatPane } from './util/tabsUtil';
import { initialPanes } from './seed';


const NoteTabs = props => {
  const [open, setOpen] = useState(false);
  const [panes, setPanes] = useState(initialPanes);
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => setValue(value);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const handleSubmit = pane => {
    setPanes(panes => panes.concat(formatPane(pane)));
  };

  const { classes } = props;

  const tabs = panes.map(pane => ({
    key: `scrollable-auto-tab-${pane.id}`,
    tabName: pane.title,
    tabContent: <p className={classes.textCenter}>{pane.content}</p>
  }));

  return (
    <div className={classes.spacing}>
      <Card>
        <CardHeader className={classes.headerTabsRoot} color='success'>
          <Tabs
            classes={{
              root: classes.tabsRoot,
              flexContainer: classes.tabsContainer,
              indicator: classes.displayNone
            }}
            onChange={handleChange}
            scrollButtons='on'
            textColor='inherit'
            value={value}
            variant='scrollable'
          >
            {tabs.map((prop, key) => (
              <Tab
                key={key}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected
                }}
                label={prop.tabName}
              />
            ))}
          </Tabs>
          <ToggleableNoteTabForm
            closeHandler={handleClose}
            open={open}
            openHandler={handleOpen}
            submitHandler={handleSubmit}
          />
        </CardHeader>
        <CardBody>
          {tabs.map((prop, key) => {
            if (key === value) {
              return <div key={key}>{prop.tabContent}</div>;
            }
            return null;
          })}
        </CardBody>
      </Card>
    </div>
  );
};

NoteTabs.propTypes = {
  classes: PropTypes.shape({
    headerTabsRoot: PropTypes.string.isRequired,
    tabRoot: PropTypes.string.isRequired,
    tabSelected: PropTypes.string.isRequired,
    tabsRoot: PropTypes.string.isRequired,
    tabsContainer: PropTypes.string.isRequired,
    displayNone: PropTypes.string.isRequired,
    spacing: PropTypes.string.isRequired,
    textCenter: PropTypes.string.isRequired
  }).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node.isRequired
    })
  ).isRequired
};

export default withStyles(noteTabStyles)(NoteTabs);
