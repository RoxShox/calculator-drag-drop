import { configureStore } from "@reduxjs/toolkit"

import calcElementsReducer from "./slices/calcElements"
import calcLogicsReducer from "./slices/calcLogics"
import checkboxReducer from "./slices/switch"

export const store = configureStore({
	reducer: {
		calcElements: calcElementsReducer,
		calcLogics: calcLogicsReducer,
		checkbox: checkboxReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
