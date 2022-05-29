import { SELECT_OPTION,LEFT_BUTTON,RIGHT_BUTTON } from '../types/types'

export const leftButton = () => {
    return {
      type: LEFT_BUTTON,
    }
  }

  export const rightButton = () => {
    return {
      type: RIGHT_BUTTON,
    }
  }

  export const selectOption = (payload) => {
      return {
          type:SELECT_OPTION,
          payload:payload
      }
  }