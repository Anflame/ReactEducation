import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API } from 'src/constats';

export interface IArticles {
  id: string;
  title: string;
}
export interface ArticleState {
  articles: IArticles[];
  loading: boolean;
  error?: string;
}
const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: '',
};
export const articlesSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    addArticles(state, action: PayloadAction<IArticles[]>) {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<IArticles[]>) => {
          state.loading = false;
          state.articles = action.payload;
        }
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchData = createAsyncThunk('users/fetchArticles', async () => {
  const res = await fetch(API);
  const data = await res.json();
  return data;
});

export const { addArticles } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
