import React, { useState } from "react";
import "./questions.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { connect } from "react-redux";
import {
  leftButton,
  rightButton,
  selectOption,
} from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

function Questions(props) {
  let size = Object.keys(props.selectedQuestions).length;
  const navigate = useNavigate();

  const selectOneOption = (answer) => {
    props.selectOption({ ...props.selectedQuestions, [props.page]: answer });
  };
  return (
    <div className="questions-area">
      <div className="attempt-questions-area">
        <div className="left-button" onClick={props.leftButton}>
          <BsFillArrowLeftCircleFill />
        </div>
        <p>Attempt Questions here</p>
        <div className="right-button" onClick={props.rightButton}>
          <BsFillArrowRightCircleFill />
        </div>
      </div>
      <p className="question">{props.questionsObject.question}</p>

      <form className="answers-input">
         
        <input
          type="radio"
          className="option1"
          id="question"
          name="fav_language"
          value="Tangent"
          checked={
            props.selectedQuestions[props.page] ===
            props.questionsObject.option_one
          }
          onChange={() => {
            selectOneOption(props.questionsObject.option_one);
          }}
        />
        <label for="html" className="label-one">
          {props.questionsObject.option_one}
        </label>
        <br />
        <input
          type="radio"
          className="option2"
          id="question"
          name="fav_language"
          value="Broken"
          checked={
            props.selectedQuestions[props.page] ===
            props.questionsObject.option_two
          }
          onChange={() => {
            selectOneOption(props.questionsObject.option_two);
          }}
        />
        <label for="html" className="label-two">
          {props.questionsObject.option_two}
        </label>
        <br />
        <input
          type="radio"
          className="option2"
          id="question"
          name="fav_language"
          value="Hello"
          checked={
            props.selectedQuestions[props.page] ===
            props.questionsObject.option_three
          }
          onChange={() => {
            selectOneOption(props.questionsObject.option_three);
          }}
        />
        <label for="html" className="label-three">
          {props.questionsObject.option_three}
        </label>
        <br />
        <input
          type="radio"
          className="option2"
          id="question"
          name="fav_language"
          value="cutie"
          checked={
            props.selectedQuestions[props.page] ===
            props.questionsObject.option_four
          }
          onChange={() => {
            selectOneOption(props.questionsObject.option_four);
          }}
        />
        <label for="html" className="label-four">
          {props.questionsObject.option_four}
        </label>
        <br />
      </form>
      {size === 5 ? (
        <div className="button-wrapper">
          <div
            className="submit-btn"
            onClick={() => {
              navigate("/result");
            }}
          >
            Submit
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    page: state.questions.page,
    questionsObject: state.questions.questionsObject,
    selectedQuestions: state.questions.selectedQuestions,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    leftButton: () => dispatch(leftButton()),
    rightButton: () => dispatch(rightButton()),
    selectOption: (selectedOption) => dispatch(selectOption(selectedOption)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
