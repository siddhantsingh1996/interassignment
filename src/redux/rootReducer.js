import { combineReducers } from 'redux'
import questionReducer from './reducers/reducers'

const rootReducer = combineReducers({   // combining reducer here
    questions:questionReducer
})

export default rootReducer
