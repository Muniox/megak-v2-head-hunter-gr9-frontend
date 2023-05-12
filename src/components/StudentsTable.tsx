import React from 'react';

import { StudentsList } from "./StudentsList";
import { mockStudentsList } from "./Student.type";

export const StudentsTable: React.FC = () => (

    <div className="flex flex-col items-center justify-between w-full bg-secondary-color">
      <div className="flex items-center justify-between bg-secondary-color w-full border-b-8 border-primary-border-color">
        <div className="w-full overflow-x-scroll px-4 pt-4">
          <div className=" border border-available-students-details-divider-line-color ">
            <p className="py-6 ml-6 text-primary-font-color font-thin text-xs ">
              <StudentsList list={mockStudentsList}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
//
