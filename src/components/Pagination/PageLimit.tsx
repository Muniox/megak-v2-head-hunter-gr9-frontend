import { PageMetaResponse } from '@backendTypes';
import React, { FC } from 'react';
interface Props {
  meta: PageMetaResponse;
  setTake: (value: number) => void;
}
export const PageLimit: FC<Props> = ({ meta, setTake }) => {
  const selectLimitPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => setTake(Number(e.target.value));
  return (
    <div className="flex flex-wrap text-center m-4">
      <div className="m-2 text-md">
        <div className="mx-auto">
          <div className="inline-block">
            <span className="mr-4 text-secondary-font-color">Ilość elementów</span>
            <select
              name="select"
              className="py-1 px-1.5 text-sm outline-none bg-primary-font-color items-center text-available-students-details-font-color focus:border-dropdown-svg-and-search-placeholder-color"
              value={meta.take}
              onChange={selectLimitPerPage}
            >
              <option value="value">{meta.take}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
