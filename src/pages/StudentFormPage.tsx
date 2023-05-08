import React from 'react';
import { StudentForm } from '../components/StudentForm/StudentForm';

export const StudentFormPage = () => (
  <main className="w-full min-h-screen bg-primary-color text-primary-font-color">
    <div className="flex flex-col items-center w-3/4 mx-auto">
      <h1>Uzupełnij informacje o swoim profilu</h1>
      <StudentForm />
    </div>
  </main>
);
