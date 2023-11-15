import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



type InitialState = {
  value: AuthState;
}

type AuthState = {
  isAuth: string | null;
  username: string;
  uid: string;
  isModerator: boolean;
}


const initialState = {
  value: {
    isAuth: '',
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
      state.value.isAuth = localStorage.getItem('token')
    }
  }
})

export const {signInToggle} = auth.actions
export default auth.reducer;