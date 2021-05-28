const grayColor = "#999";
const whiteColor = "#FFF";
const primaryColor = "#9c27b0";

export const customInputStyles = {
  disabled: {
    '&:before': {
      backgroundColor: 'transparent !important',
    },
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderBottomColor: grayColor + ' !important',
      borderBottomWidth: '1px !important',
    },
    '&:after': {
      borderBottomColor: primaryColor,
    },
  },
  underlineError: {
    '&:after': {
      borderBottomColor: 'danger',
    },
  },
  underlineSuccess: {
    '&:after': {
      borderBottomColor: 'success',
    },
  },
  labelRoot: {
    // ...defaultFont,
    color: grayColor + ' !important',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.42857',
    top: '10px',
    letterSpacing: 'unset',
    '& + $underline': {
      marginTop: '0px',
    },
  },
  labelRootError: {
    color: 'danger !important',
  },
  labelRootSuccess: {
    color: 'success !important',
  },
  feedback: {
    position: 'absolute',
    bottom: '4px',
    right: '0',
    zIndex: '2',
    display: 'block',
    width: '24px',
    height: '24px',
    textAlign: 'center',
    pointerEvents: 'none',
  },
  formControl: {
    margin: '0 0 17px 0',
    paddingTop: '27px',
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: grayColor,
    },
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      borderBottomColor: whiteColor,
    },
    '&:after': {
      borderBottomColor: whiteColor,
    },
  },
  input: {
    color: grayColor,
    height: 'unset',
    '&,&::placeholder': {
      fontSize: '14px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.42857',
      opacity: '1',
    },
    '&::placeholder': {
      color: grayColor,
    },
  },
  whiteInput: {
    '&,&::placeholder': {
      color: whiteColor,
      opacity: '1',
    },
  },
};
