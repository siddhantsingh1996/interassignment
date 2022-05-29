import React from "react";
import "./review.css";
import { connect } from "react-redux";

function Review(props) {
  return (
    <div className="review-answers">
      <p className="review-text">Review Answers here</p>
      {Object.keys(props.selectedQuestions).map((k, i) => {
        return (
          <p className="answers">{`#${i + 1}:${props.selectedQuestions[k]}`}</p>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedQuestions: state.questions.selectedQuestions,
  };
};

export default connect(mapStateToProps)(Review);
