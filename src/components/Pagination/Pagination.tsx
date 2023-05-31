import { PageMetaResponse } from '@backendTypes';
import React, { FC, useEffect, useState } from 'react';
import { Page } from './Page';
import { PageLimit } from './PageLimit';
import { CurrentPageBox } from './CurrentPageBox';

interface Props {
  meta: PageMetaResponse;
}
export const Pagination: FC<Props> = ({ meta }) => {
  const [page, setPage] = useState(meta.page);
  const [take, setTake] = useState(meta.take);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/api/students/?order=DESC&page=1&take=2');
      return response.json();
    };
    fetchData().catch(console.error);
  }, [page, take]);

  return (
    <div className="flex justify-end items-center w-full">
      <PageLimit meta={meta} setTake={setTake} />
      <CurrentPageBox meta={meta} setPage={setPage} />
      <Page meta={meta} setPage={setPage} />
    </div>
  );
};
