import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sendMessageIsOpen: false,
  updateDataList: false,
  totalInbox: 0,
  totalStared: 0,
  totalImportant: 0,
  total: { inbox: 0, stared: 0, important: 0 }
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMesage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    updateData: (state) => {
      state.updateDataList = true
    },
    notUpdateData: (state) => {
      state.updateDataList = false
    },
    updateTotal: (state, actions) => {
      state.total = actions.payload;
    }
  },
});

export const { openSendMesage, closeSendMessage, updateData, notUpdateData,updateTotal } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectUpdateDataList = (state) => state.mail.updateDataList;
export const selectUpdateTotal = (state) => state.mail.total;

export default mailSlice.reducer;
