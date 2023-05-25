import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `${props.price.toLocaleString()}원`;
  const boardImg = `img/${props.id}.jpeg`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <img src={process.env.PUBLIC_URL + boardImg}></img>
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <span className={classes.amount}>{props.amount}</span>
        <button onClick={props.onAdd}>+</button>
      </div>
      <div>
        <span className={classes.price}>{price}</span>
      </div>
    </li>
  );
};

export default CartItem;
