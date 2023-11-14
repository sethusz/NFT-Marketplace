import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



type InitialState = {
  value: AuthState;
}

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
}


const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  } as AuthState
} as InitialState

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInToggle: (state) => {
      state.value.isAuth = true
    }
  }
})

export const {signInToggle} = auth.actions
export default auth.reducer;