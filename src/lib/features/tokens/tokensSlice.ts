import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Token } from "../../interface/tokens";
import { RootState } from "../../store";

// Use createEntityAdapter for normalization
// We use 'address' as the unique ID for each token
const tokensAdapter = createEntityAdapter<Token>({
  // Sort tokens by creation time by default (descending)
  sortComparer: (a, b) => b.createdAt - a.createdAt,
});

const tokensSlice = createSlice({
  name: "tokens",
  initialState: tokensAdapter.getInitialState({
    loading: false,
    error: null as string | null,
  }),
  reducers: {
    // Basic CRUD actions provided by createEntityAdapter
    setTokens: tokensAdapter.setAll,
    addToken: tokensAdapter.addOne,
    updateToken: tokensAdapter.updateOne,
    // Batch update for the WebSocket Mock to update multiple tokens efficiently
    updateTokens: tokensAdapter.updateMany,

    // UI focused actions
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTokens,
  addToken,
  updateToken,
  updateTokens,
  setLoading,
  setError,
} = tokensSlice.actions;

// Selectors
export const {
  selectAll: selectAllTokens,
  selectById: selectTokenByAddress,
  selectIds: selectTokenIds,
} = tokensAdapter.getSelectors((state: RootState) => state.tokens);

export default tokensSlice.reducer;
