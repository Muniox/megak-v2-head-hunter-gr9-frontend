import React from 'react';

interface Props {
  message: string;
  info?: string;
}

export const SmallTextBlock = ({ message, info }: Props) => (
  <div className="w-fit h-full bg-black p-3 mr-4 m-0">
    <div className="m-0 text-xm line-clamp-2 text-gray-400">{message}</div>
    <div className="mt-2 text-xm line-clamp-2  bg-black text-white font-bold pt-3">{info}</div>
  </div>
);
