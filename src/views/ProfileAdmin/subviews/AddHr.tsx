import { HrCreatedResponse } from '@backendTypes';
import React, { useState } from 'react';

import { AddHrForm } from '../../../components/forms';
import { translations } from '../../../utlils/translations';

export const AddHr: React.FC = () => {
  const [hrData, setHrData] = useState<HrCreatedResponse | null>(null);

  return (
    <div className="flex flex-col items-center justify-start w-4/5 h-4/5 overflow-hidden bg-secondary-color">
      <h1 className="flex text-white text-2xl mt-20">{translations.addHr.title}</h1>
      <div className="flex items-center justify-center h-fit bg-primary-color mt-4">
        <AddHrForm setHrData={setHrData} />
      </div>
      {hrData && (
        <div className="mt-4 bg-white text-black p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">
            Rekruter {hrData.fullName} z firmy {hrData.company} został dodany do bazy.
          </h3>
        </div>
      )}
    </div>
  );
};
