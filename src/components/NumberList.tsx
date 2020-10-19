import React, { FC } from "react";

interface NumberListProp {
  numbers: Array<number>;
}

const NumberList: FC<NumberListProp> = (props: NumberListProp) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number * 2}</li>
  ));
  return <ul>{listItems}</ul>;
};

export default NumberList;
