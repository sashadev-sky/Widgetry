import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { cardStyles } from './cardStyles';


function Card({ ...props }) {
  const {
    classes,
    className,
    children,
    raised,
    background,
    color,
    ...rest
  } = props;
  const cardClasses = clsx({
    [classes.card]: true,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes[color]]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  className: '',
  raised: false,
  background: false
};

Card.propTypes = {
  children: PropTypes.shape.isRequired,
  classes: PropTypes.shape.isRequired,
  className: PropTypes.string,
  raised: PropTypes.bool,
  background: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose'
  ])
};

export default withStyles(cardStyles)(Card);
