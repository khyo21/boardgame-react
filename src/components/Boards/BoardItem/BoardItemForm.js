import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./BoardItemForm.module.css";

const BoardItemForm = (props) => {
  const [amountIsVaild, setAmountIsVaild] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    // 수량 유효성 검사
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsVaild(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    console.log(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="수량"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          /*기본내장props*/
        }}
      />
      <button>+ 장바구니에 추가</button>
      {!amountIsVaild && <p>유효한 수량을 입력해주세요(1~5개)</p>}
    </form>
  );
};

export default BoardItemForm;
