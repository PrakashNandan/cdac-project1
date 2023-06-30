import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './empAuthService'
import { ToastContainer, toast } from 'react-toastify'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('empUser'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  isLoggedin:false,
}

// Register user
export const register1 = createAsyncThunk(
  'charge/newUser',
  async (user, thunkAPI) => {
    try {
      return await authService.register1(user)
      
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Login user

export const login1 = createAsyncThunk(
  'charge/newUserLogin',
  async (user, thunkAPI) => {
    try {
      return await authService.login(user)
      
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const logout1 = createAsyncThunk('charge/newUserLogout', async () => {
  await authService.logout1()
})

export const empAuthSlice = createSlice({
  name: 'empAuth',
  initialState,
  reducers: {
    reset1: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register1.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register1.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register1.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login1.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login1.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login1.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout1.fulfilled, (state) => {
        state.user = null
      })
     
    
  },
})

export const { reset1 } = empAuthSlice.actions
export default empAuthSlice.reducer