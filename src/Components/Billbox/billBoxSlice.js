import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    BillType: '',
    Department: '',
    PaymentType: '',
    invoiceNo: '',
    invoiceDate: '',
    
    amount: '',
    DownloadPdf:false,
    
   
};

// export const setDownloadPdfAsync = createAsyncThunk(
//   'billBox/setDownloadPdf',
//   async () => {
//     state.
//   }
// );

export const billBoxSlice = createSlice({
  name: 'billBox',
  initialState,
  reducers: {
    setDownloadPdf: (state,action) => {
      state.DownloadPdf = action.payload; //immer
    },
    // decrement: (state) => {
    //   state.amount -= 1;
    // },
    setPdf: (state, action) => {
    //   state.billTypeName = action.payload.billTypeName;
    //   state.entryDate = action.payload.entryDate;
    console.log(action.payload)
      state.BillType= action.payload.BillTypeName;
      state.Department= action.payload.DepartmentName ;
      state.PaymentType= action.payload.PaymentTypeIdName;
      state.invoiceNo= action.payload.invoiceNo ;
      state.invoiceDate= action.payload.invoiceDate ;
      state.amount= action.payload.amount ;
    }
  }
  
});

// Action creators are generated for each case reducer function
export const { setPdf ,setDownloadPdf} = billBoxSlice.actions;

export const selectPdf = (state) => state.billBox;

export default billBoxSlice.reducer;