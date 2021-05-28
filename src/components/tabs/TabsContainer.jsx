import React, { useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';
import { ToggleableForm } from './ToggleableForm';

import { tabStyles } from './tabStyles';

import { initialPanes } from './seed';

const TabsContainer = props => {
  const [panes, setPanes] = useState(initialPanes);
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const { classes, title, rtlActive } = props;

  const tabs = panes.map((pane) => ({
    key: pane.id,
    tabName: pane.title,
    tabContent: <p className={classes.textCenter}>{pane.content}</p>,
  }));

  const tabsContainer = classNames({
    [classes.tabsContainer]: true,
    [classes.tabsContainerRTL]: rtlActive,
  });

  return (
    <div className={classes.spacing}>
      <Card>
        <CardHeader color='success'>
          {title !== undefined ? <div>{'title'}</div> : null}
          <Tabs
            classes={{
              root: classes.TabsRoot,
              flexContainer: tabsContainer,
              indicator: classes.displayNone,
            }}
            onChange={handleChange}
            scrollButtons='auto'
            textColor='inherit'
            variant='scrollable'
            value={value}
          >
            {tabs.map((prop, key) => {
              var icon = {};
              if (prop.tabIcon !== undefined) {
                icon = {
                  icon: <prop.tabIcon className={classes.tabIcon} />,
                };
              } else {
                icon = {};
              }
              return (
                <Tab
                  key={key}
                  classes={{
                    root: classes.TabRoot,
                    selected: classes.TabSelected,
                    wrapper: classes.TabWrapper,
                  }}
                  {...icon}
                  label={prop.tabName}
                />
              );
            })}
          </Tabs>
          <ToggleableForm isOpen={true} />
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

TabsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose',
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool
};

export default withStyles(tabStyles)(TabsContainer);
