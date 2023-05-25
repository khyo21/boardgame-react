import classes from "./Card.module.css";
import BoardItem from "../Boards/BoardItem/BoardItem";
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default Card;
