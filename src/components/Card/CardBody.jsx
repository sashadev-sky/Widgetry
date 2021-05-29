import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';


function CardBody({ ...props }) {
  const {
    classes, className, children, ...rest
  } = props;
  const cardBodyClasses = clsx({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

const cardBodyStyles = {
  cardBody: {
    padding: '0.9375rem 1.875rem',
    flex: '1 1 auto',
    WebkitBoxFlex: '1'
  }
};

CardBody.defaultProps = {
  className: ''
};

CardBody.propTypes = {
  children: PropTypes.shape.isRequired,
  classes: PropTypes.shape.isRequired,
  className: PropTypes.string
};

export default withStyles(cardBodyStyles)(CardBody);
