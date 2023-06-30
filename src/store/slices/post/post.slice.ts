import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostState } from '@/store/slices/post/post.types'

const initialState: PostState = {
  posts: null,
  isLoading: false,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const {
  setPostIsLoading,
} = postSlice.actions

export const postReducer = postSlice.reducer
