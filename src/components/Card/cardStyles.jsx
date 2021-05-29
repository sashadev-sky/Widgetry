export const cardStyles = {
  card: {
    border: '1px solid black',
    marginBottom: '30px',
    marginTop: '30px',
    borderRadius: '6px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#fff',
    width: '100%',
    boxShadow:
      '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    fontSize: '.875rem',
    // some jss/css to make the cards look a bit better on Internet Explorer
    '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
      display: 'inline-block !important'
    }
  },
  cardPlain: {
    background: 'transparent',
    boxShadow: 'none'
  },
  cardRaised: {
    boxShadow:
      '0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  cardBackground: {
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    textAlign: 'center',
    color: '#fff',
    '& h3': {
      color: '#fff !important'
    },
    '& p': {
      color: 'rgba(255,255,255,0.7)!important'
    },
    '&:after': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: '""',
      backgroundColor: 'rgba(0, 0, 0, 0.56)',
      borderRadius: '6px'
    },
    '& small': {
      color: 'rgba(255, 255, 255, 0.7) !important'
    }
  },
  primary: {
    background: 'linear-gradient(60deg,#ab47bc,#7b1fa2)',
    '& h1 small': {
      color: 'rgba(255, 255, 255, 0.8)'
    },
    color: '#FFFFFF'
  },
  info: {
    background: 'linear-gradient(60deg,#26c6da,#0097a7)',
    '& h1 small': {
      color: 'rgba(255, 255, 255, 0.8)'
    },
    color: '#FFFFFF'
  },
  success: {
    background: 'linear-gradient(60deg,#66bb6a,#388e3c)',
    '& h1 small': {
      color: 'rgba(255, 255, 255, 0.8)'
    },
    color: '#FFFFFF'
  },
  warning: {
    background: 'linear-gradient(60deg,#ffa726,#f57c00)',
    '& h1 small': {
      color: 'rgba(255, 255, 255, 0.8)'
    },
    color: '#FFFFFF'
  },
  danger: {
    background: 'linear-gradient(60deg,#ef5350,#d32f2f)',
    '& h1 small': {
      color: 'rgba(255, 255, 255, 0.8)'
    },
    color: '#FFFFFF'
  },
  rose: {
    background: 'linear-gradient(60deg,#ec407a,#c2185b)',
    '& h1 small': {
      color: 'rgba(255, 255, 255, 0.8)'
    },
    color: '#FFFFFF'
  }
};
