import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser, signOut } from './authApi';
// import { updateUser } from '../user/userAPI';

const initialState = {
  loggedInUser: null,
  status: 'idle',
  error: null,
  api_token: null,
};

// console.log('sdf', state.auth.loggedInUser)


// createUser
// export const createUserAsync = createAsyncThunk(
//   'user/createUser',
//   async (userData) => {
//     const response = await createUser(userData);
//     return response.data;
//   }
// );


// checkUser
export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (apiToken : string) => {
    const response = await checkUser(apiToken);
    return response.data;
  }
);

// signOut
export const signOutAsync = createAsyncThunk(
  'user/signOut',
  async () => {
    // if insert or update any column on db then get api call    
    const response = await signOut();
    return response.data;
  }
);


export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      
      // checkUserAsync
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        // console.log("action payload",action.payload);
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'error';
        // state.error = action.payload;
      })

      // updateUserAsync
    //   .addCase(updateUserAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(updateUserAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.loggedInUser = action.payload;
    //   })

      // signOutAsync
      .addCase(signOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = null;
      })
  },
});

// console.log(state.auth.loggedInUser);

export const selectLoggedInUser = (state : any) => state.auth.loggedInUser;
// export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
