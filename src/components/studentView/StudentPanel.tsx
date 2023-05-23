import React from 'react';

export const StudentPanel = () => (
  <div className="w-2/2 ml-auto mr-auto text-white">
    <div className="bg-gray-900 h-80 m-0 pt-10">
      <div className="m-auto bg-red-500 flex items-center justify-center w-1/2 h-1/2 rounded-full">
        <span className="text-white font-bold text-xl">Foto</span>
      </div>
    </div>
    <div className="w-2/2 ml-auto mr-auto">
      <div className=" bg-gray-900 flex w-full justify-center bg-black h-16">
        <div>
          <span className="font-bold text-2xl m-1">Jan Kowalski</span>
          <span className="ml-10 text-blue-800 block m-1">jankowalski</span>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 flex w-full justify-center bg-black h-16">
      <div>
        <span className="text-xs block m-1">&#128222; +48 323 123 123</span>
        <span className="text-xs block m-1">&#128235; jankowalski@gmai.com</span>
      </div>
    </div>
    <div className="bg-gray-900 flex w-full h-full bg-black h-16">
      <div>
        <span className="text-xs block m-1 p-3">O mnie </span>
        <span className="text-xs block m-1 p-3">
          Lorem ipsum i tak dalej Lorem ipsum i tak dalej Lorem ipsum i tak dalej Lorem ipsum i tak dalej Lorem ipsum i
          tak dalej Lorem ipsum i tak dalej Lorem ipsum i tak dalej Lorem ipsum i tak dalej Lorem ipsum i tak dalej
          Lorem ipsum i tak dalej Lorem ipsum i tak dalej Lorem ipsum i tak dalej Lorem ipsum i tak dalej Lorem ipsum i
          tak dalej Lorem ipsum i tak dalej Lorem ipsum i tak dalej
        </span>
      </div>
    </div>
    <div className="bg-gray-900 flex flex-col flex">
      <button className="m-3 p-2 bg-red-500 h-5/5 w-4/5 ml-auto mr-auto" type="submit">
        Brak zainteresowania
      </button>
      <button className="m-3 p-2 bg-red-500 w-4/5 ml-auto mr-auto" type="submit">
        Zatrudniony
      </button>
    </div>
  </div>
);
