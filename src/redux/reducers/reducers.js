import { SELECT_OPTION,LEFT_BUTTON,RIGHT_BUTTON } from '../types/types'
import data from '../../data/data';

const initialState = {
    score: 0,
    totalQuestionsAttempted:0,
    page:1,
    questionsObject:data[0],
    selectedQuestions:{},
    
}

const questionReducer = (state = initialState, action) => {
      switch (action.type) {
          case LEFT_BUTTON:
             return{
                 ...state,
                 page:state.page>1?--state.page:1,
                 questionsObject:data[state.page-1]
             }

          
          case RIGHT_BUTTON:
            return{
                ...state,
                page:state.page!==5?++state.page:5,
                questionsObject:data[state.page-1]
            }
          case SELECT_OPTION:
              
              return{
                  ...state,
                  selectedQuestions:action.payload,
                  score:state.questionsObject.answer===action.payload[state.page]?++state.score:state.score,
                  totalQuestionsAttempted:++state.totalQuestionsAttempted
              }
        
        default:
           return state  
      }     
};


export default questionReducer;