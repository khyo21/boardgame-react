import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import BoardItemForm from "./BoardItemForm";
import classes from "./BoardItem.module.css";

const BoardItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toLocaleString()}원`;
  const boardgameImg = `img/${props.id}.jpeg`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.board}>
      <div className={classes.boarditem}>
        <div>
          <img src={process.env.PUBLIC_URL + boardgameImg} />
        </div>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <BoardItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default BoardItem;
