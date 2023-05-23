import React, { ReactNode } from 'react';

interface Props {
  message: string;
  children?: ReactNode;
}

export const SingleBlackBar = ({ message, children }: Props) => (
  <div className="w-10/12">
    <div className=" bg-gray-900 h-14 flex">
      <span className="text-xm mt-auto mb-auto font-bold text-white ml-5 mt-1">{message}</span>
    </div>

    <div className="text-xs bg-black h-26 p-3 flex">{children}</div>
  </div>
);
