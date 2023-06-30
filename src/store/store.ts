import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postReducer } from '@/store/slices/post/post.slice'

const rootReducer = combineReducers({
  posts: postReducer,
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
