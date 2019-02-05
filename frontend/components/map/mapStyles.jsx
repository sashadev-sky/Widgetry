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
  }
};

export default mapStyles;