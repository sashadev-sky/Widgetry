import React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";


function CardBody({ ...props }) {
  const {
    classes,
    className,
    children,
    ...rest
  } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
    WebkitBoxFlex: "1"
  },
};

CardBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(cardBodyStyle)(CardBody);
