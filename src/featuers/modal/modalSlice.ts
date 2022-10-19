import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../stores/store";

export interface ModalState {
  isBasicPricingModalOpen: boolean;
  isUltimatePricingModalOpen: boolean;
  isProPricingModalOpen: boolean;
}

const initialState: ModalState = {
  isBasicPricingModalOpen: false,
  isProPricingModalOpen: false,
  isUltimatePricingModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openBasicPricingModal: (state) => {
      state.isBasicPricingModalOpen = true;
    },
    closeBasicPricingModal: (state) => {
      state.isBasicPricingModalOpen = false;
    },

    openUltimatePricingModal: (state) => {
      state.isUltimatePricingModalOpen = true;
    },
    closeUltimatePricingModal: (state) => {
      state.isUltimatePricingModalOpen = false;
    },

    openProPricingModal: (state) => {
      state.isProPricingModalOpen = true;
    },
    closeProPricingModal: (state) => {
      state.isProPricingModalOpen = false;
    },
  },
});

export const {
  closeBasicPricingModal,
  openBasicPricingModal,
  closeProPricingModal,
  closeUltimatePricingModal,
  openProPricingModal,
  openUltimatePricingModal,
} = modalSlice.actions;

export default modalSlice.reducer;
