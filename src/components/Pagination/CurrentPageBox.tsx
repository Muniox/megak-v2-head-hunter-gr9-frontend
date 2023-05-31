import React, { FC } from 'react';
import { PageMetaResponse } from '@backendTypes';

interface Props {
  meta: PageMetaResponse;
  setPage: (value: number) => void;
}
export const CurrentPageBox: FC<Props> = ({ meta }) => {
  return (
    <div className="flex flex-wrap text-center m-1 text-secondary-font-color">
      <div className="m-2 text-md">
        <div className="mx-auto pr-10">
          <div className="flex flex-wrap">
            <p className="px-1">{meta.page}</p>
            <span className=""> z {meta.pageCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
