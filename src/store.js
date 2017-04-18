import {createStore} from 'redux'
import RecipeFormReducer from './reducers/RecipeFormReducer'

const store = createStore(RecipeFormReducer)

export default store