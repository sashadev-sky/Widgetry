import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';


export const mapStyles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 100,
    position: 'relative',
    left: '43%',
    height: 36,
    top: 10,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px',
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '2px',
    '@media (max-width:600px)': {
      transform: 'rotate(90deg)',
      left: '-6%',
      position: 'absolute',
      top: 117
    },
    '@media (max-width:450px)': {
      left: '-7%'
    }
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  icon: {
    color: green[600],
    '@media (max-width:600px)': {
      transform: 'rotate(-90deg)'
    }
  },
  icon2: {
    color: blue[600],
    '@media (max-width:600px)': {
      transform: 'rotate(-90deg)'
    }
  },
  maploader: {
    display: 'flex',
    height: '650px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  mainComp: {
    backgroundColor: '#263238',
    border: '2px solid black',
    height: '650px',
    marginRight: '15px',
    minWidth: '422px',
    overflow: 'hidden',
    paddingLeft: '30px',
    paddingRight: '30px',
    position: 'absolute',
    width: '97%',
    left: -15,
    '@media (max-width:768px)': {
      width: '115%'
    },
    '@media (max-width:360px)': {
      width: '135%'
    }
  },
  searchBar: {
    padding: '2px 4px',
    display: 'flex',
    width: 275,
    position: 'absolute',
    height: 59,
    '@media (max-width:550px)': {
      width: 205,
      bottom: 33,
      left: 5
    }
  },
  clearButton: {
    padding: '10px',
    top: '16px',
    right: '15px',
    position: 'absolute',
    '@media (max-width:450px)': {
      right: '10px'
    }
  },
  sidebar: {
    width: '275px',
    height: '77px',
    bottom: '0px',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)',
    zIndex: '0'
  },
  searchBarDivider: {
    width: 200,
    height: 2,
    margin: 2,
    position: 'relative',
    bottom: '-47px',
    left: '21px',
    font: '900',
    color: 'gray'
  },
  clearicon: {
    fontSize: 15
  },
  mapComponent: {
    position: 'relative',
    height: '500px',
    width: '100%',
    margin: 'auto',
    marginTop: 20
  },
  searchInput: {
    fontSize: '20px',
    left: 27,
    height: 67,
    width: 200,
    textOverflow: 'ellipsis',
    position: 'absolute',
    top: -3,
    '@media (max-width:550px)': {
      fontSize: '15px',
      width: '135px'
    },
    '@media (max-width:450px)': {
      width: '130px'
    }
  }
};
