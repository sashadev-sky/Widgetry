import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

const mapStyles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 100,
    position: "relative",
    left: `43%`,
    height: 36,
    top: 10,
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
    borderTopLeftRadius: "2px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "2px",
    ["@media (max-width:1000px)"]: {},
    ["@media (max-width:600px)"]: {
      transform: "rotate(90deg)",
      left: "-6%",
      position: "absolute",
      top: 117
    },
    ["@media (max-width:450px)"]: {
      left: "-8%"
    },
    ["@media (max-width:350px)"]: {}
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  icon: {
    color: green[600],
    ["@media (max-width:600px)"]: {
      transform: "rotate(-90deg)"
    }
  },
  icon2: {
    color: blue[600],
    ["@media (max-width:600px)"]: {
      transform: "rotate(-90deg)"
    }
  },
  maploader: {
    display: "flex",
    height: "650px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  mainComp: {
    width: "131%",
    minWidth: "310px",
    border: "2px solid black",
    height: "650px",
    backgroundColor: "#263238",
    position: "absolute",
    left: "-150px",
    overflow: "hidden",
    ["@media (max-width:1000px)"]: {
      left: "-8px",
      width: "102%",
      overflow: "hidden"
    },
    ["@media (max-width:600px)"]: {
      left: "-6px",
      width: "102%"
    },
    ["@media (max-width:450px)"]: {
      left: "-6px",
      width: "102%"
    }
  },
  searchBar: {
    padding: "2px 4px",
    display: "flex",
    width: 275,
    position: "absolute",
    height: 59,
    ["@media (max-width:550px)"]: {
      width: 205,
      bottom: 33,
      left: 5
    }
  },
  clearButton: {
    padding: "10px",
    top: "16px",
    right: "15px",
    position: "absolute",
    ["@media (max-width:450px)"]: {
      right: "10px"
    }
  },
  sidebar: {
    width: "275px",
    height: "77px",
    bottom: "0px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: "0"
  },
  searchBarDivider: {
    width: 200,
    height: 2,
    margin: 2,
    position: "relative",
    bottom: "-47px",
    left: "21px",
    font: "900",
    color: "gray",
    ["@media (max-width:600px)"]: {
      width: "130px"
    },
    ["@media (max-width:450px)"]: {
      width: "135px"
    }
  },
  clearicon: {
    fontSize: 15
  },
  mapComponent: {
    position: "relative",
    height: "500px",
    width: "80%",
    borderRadius: "20px",
    margin: "auto",
    marginTop: 20,
    ["@media (max-width:1000px)"]: {
      margin: "auto",
      marginTop: "20px"
    },
    ["@media (max-width:600px)"]: {
      margin: "auto",
      marginTop: "20px"
    },
    ["@media (max-width:450px)"]: {
      margin: "auto",
      marginTop: "20px"
    }
  }
};

export default mapStyles;