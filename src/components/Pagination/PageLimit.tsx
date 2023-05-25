import { PageMetaResponse } from '@backendTypes';
import React, { FC } from 'react';
interface Props {
  meta: PageMetaResponse;
  setTake: (value: number) => void;
}
export const PageLimit: FC<Props> = ({ meta, setTake }) => {
  const selectLimitPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => setTake(Number(e.target.value));
  return (
    <div className="flex justify-end items-center my-4 relative w-1/6">
      <div className="flex justify-end items-center">
        <span className="text-sm mr-2 text-available-students-details-font-color">Ilość elementów:</span>
        <select
          name="select"
          className="py-1.5 px-1.5 outline-none bg-primary-font-color items-center font-available-students-details-font-color focus:border-dropdown-svg-and-search-placeholder-color"
          value={meta.take}
          onChange={selectLimitPerPage}
        >
          <option value="value">{meta.take}</option>
        </select>
      </div>
    </div>
  );
};
