import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { cardStyle } from './cardStyle';

function Card({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    raised,
    background,
    color,
    ...rest
  } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes[color]]: color,
    [className]: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  raised: PropTypes.bool,
  background: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
  ]),
};

export default withStyles(cardStyle)(Card);
