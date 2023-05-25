import React, { FC } from 'react';
import { PageMetaResponse } from '@backendTypes';

interface Props {
  meta: PageMetaResponse;
  setPage: (value: number) => void;
}
export const CurrentPageBox: FC<Props> = ({ meta }) => {
  return (
    <div className="flex justify-end text-sm text-available-students-details-font-color w-1/6">
      <p className="px-2">{meta.page}</p>
      <span className="w-1/2 mr-2"> z {meta.pageCount}</span>
    </div>
  );
};
