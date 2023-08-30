import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../redux/counter";

const Score = () => {
    const {score} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  // const [ score, setScore ] = useState(0);
  // console.log(score);
  return (
    <div>
      <div className="text-center">All player scores</div>
      <div className="border">
        <div className="text-secondary">Player One Score: {score}</div>
        <div className="btn-container">
          <button onClick={() => dispatch(incrementByAmount(6))} className="btn">
            6
          </button>
          <button onClick={() => dispatch(incrementByAmount(4))} className="btn">4</button>
          <button onClick={() => dispatch(incrementByAmount(2))} className="btn">2</button>
          <button onClick={() => dispatch(increment())} className="btn">1</button>
          <button onClick={() => dispatch(incrementByAmount(0))} className="btn">0</button>
        </div>
      </div>
    </div>
  );
};

export default Score;
