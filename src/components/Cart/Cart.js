import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const amount = `${cartCtx.totalAmount.toLocaleString()}원`;
  const shippingFee = 3000;
  const totalAmount = `${(
    cartCtx.totalAmount + shippingFee
  ).toLocaleString()}원`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const hasItem = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <>
      {hasItem ? (
        <Modal onClose={props.onClose}>
          {cartItems}
          <div>
            <span>상품금액 </span>
            <span>{amount}</span>
          </div>
          <div>
            <span>배송비 </span>
            <span>{shippingFee}원</span>
          </div>
          <div className={classes.total}>
            <span>결제예정금액</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              닫기
            </button>
            <button className={classes.button}>주문하기</button>
          </div>
        </Modal>
      ) : (
        <Modal onClose={props.onClose}>
          <h3>
            😉
            <br />
            장바구니에 상품을 담아주세요.🛒
          </h3>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              닫기
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default Cart;
