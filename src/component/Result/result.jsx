import React from "react";
import { connect } from "react-redux";
import "./result.css";

 function Result(props) {
  return (
    <div className="result">
      <div className="result-wrapper">
        <img className="img-submit" src="http://www.clker.com/cliparts/f/O/f/X/U/r/check-mark-button-hi.png" />
        <h2> You have successfully submited the assignment</h2>
        <h4>-Question Asked:5</h4>
        <h4>-Question Correct:{props.score}</h4>
        <h4>-Your Score:{Math.round((props.score/5)*100)}</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    score:state.questions.score,

  };
};

export default connect(mapStateToProps)(Result);


