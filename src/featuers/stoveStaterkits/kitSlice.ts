import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IKit {
  kitName:
    | "CounterTopKit"
    | "Counter + Customer Kit"
    | "Guest Self-Service Kit"
    | "Counter Only Kit"
    | "Table Kit";
  isSelected: boolean;
}

const initialState: IKit[] = [
  {
    kitName: "CounterTopKit",
    isSelected: true,
  },
  {
    kitName: "Counter + Customer Kit",
    isSelected: false,
  },
  {
    kitName: "Guest Self-Service Kit",
    isSelected: false,
  },
  {
    kitName: "Counter Only Kit",
    isSelected: false,
  },
  {
    kitName: "Table Kit",
    isSelected: false,
  },
];

const kitSlice = createSlice({
  name: "kitStater",
  initialState,
  reducers: {
    selectKit: (state, action: PayloadAction<string>) => {
      state.map((kit) => {
        if (kit.kitName === action.payload) {
          kit.isSelected = true;
        }
      });
    },
    deSelectKit: () => {},
  },
});

export const { deSelectKit, selectKit } = kitSlice.actions;

export default kitSlice.reducer;
