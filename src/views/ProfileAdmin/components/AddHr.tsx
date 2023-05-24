import { HrCreatedResponse } from '@backendTypes';
import React, { useState } from 'react';

import { AddHrForm } from '../../../components/forms';
import { translations } from '../../../utlils/translations';

export const AddHr: React.FC = () => {
  const [hrData, setHrData] = useState<HrCreatedResponse | null>(null);

  return (
    <div className="flex flex-col items-center justify-start w-4/5 h-3/5 md:h-3/4 overflow-hidden bg-secondary-color">
      <h1 className="flex text-white text-2xl md:text-3xl mt-5 md:mt-10 lg:mt-20">{translations.addHr.title}</h1>
      <div className="flex items-center justify-center h-fit py-4 lg:h-2/3 lg:w-1/2 bg-primary-color md:mt-10 lg:pb-4 mt-4">
        <AddHrForm setHrData={setHrData} />
      </div>
      {hrData && (
        <div className="mt-4 bg-primary-color text-neutral-300 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">
            Rekruter {hrData.fullName} z firmy {hrData.company} został dodany do bazy.
          </h3>
        </div>
      )}
    </div>
  );
};
