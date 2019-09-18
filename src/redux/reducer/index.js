/**
 * 数据处理
 */
import {type} from '../action/index'
const initialState ={
  menuName: '首页'
}

export default (state=initialState, action) => {
  switch (action){
    case type.SWITCH_MENU:
      return {
          ...state,
          menuName: action.menuName
      }
    default:
      break

  }
}