import { Button } from '@mui/material';
import { PayloadAction } from '@reduxjs/toolkit';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from 'src/store';
import { ArticleState, fetchData, IArticles } from 'src/store/articles/slice';
export const Articles: FC = () => {
  const loading = useSelector((state: StoreState) => state.articles.loading);
  const error = useSelector((state: StoreState) => state.articles.error);
  const articles = useSelector((state: StoreState) => state.articles.articles);
  const dispatch =
    useDispatch<
      ThunkDispatch<ArticleState, void, PayloadAction<IArticles[]>>
    >();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <h2>Articles</h2>
      <Button onClick={() => dispatch(fetchData())}>get data</Button>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
