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
  // reducers: {
  //   logOut: () => {
  //     return initialState;
  //   },
  //   logIn: (state, action: PayloadAction<string>) => {
  //     return {
  //       value: {
  //         isAuth: true,
  //         username: action.payload,
  //         uid: "sdasdasdsadasdas",
  //         isModerator: false,
  //       }
  //     }
  //   }
  // }
})

export const {signInToggle} = auth.actions
export default auth.reducer;