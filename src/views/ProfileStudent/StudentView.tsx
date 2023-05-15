import React from 'react';
import { SingleBlackBar } from '../../components/studentView/SingleBlackBar';
import { StudentPanel } from '../../components/studentView/StudentPanel';
import { SmallTextBlock } from '../../components/studentView/SmallTextBlock';

export const StudentView = () => (
  <div className="bg-black m-1">
    <button type="button" className=" ml-20 float-left bg-black text-white font-bold">
      {' '}
      Wróc{' '}
    </button>
    <div className="flex mt-16 ml-20 justify-center">
      <div className="ml-10 w-1/6 ">
        <StudentPanel />
      </div>

      <div className="w-10/12 m-1">
        <SingleBlackBar message="Oceny">
          <SmallTextBlock message="Ocena przejścia kursu" info="1/5" />
          <SmallTextBlock message="Ocena aktywności i zaangażowania w kursie" info="1/5" />
          <SmallTextBlock message="Ocena kodu w projekcie własnym" info="1/5" />
          <SmallTextBlock message="Ocena pracy w zespole Scrum" info="1/5" />
        </SingleBlackBar>

        <SingleBlackBar message="Oczekiwania w stosunku do zatrudnienia">
          <SmallTextBlock message="Preferowane miejsce pracy" info="Biuro" />
          <SmallTextBlock message="Docelowe miasto, gdzie chce pracować kandydat" info="Warszawa" />
          <SmallTextBlock message="Oczekiwany tryb kontraktu" info="B2B" />
          <SmallTextBlock message="Oczekiwane wynagrodzenie miesięczne netto" info="8000 zł" />
          <SmallTextBlock message="Zgoda na odbycie bezpłatnych praktyk" info="TAK" />
          <SmallTextBlock message="Komercyjne doświadczenie w programowaniu" info="6 miesięcy" />
        </SingleBlackBar>

        <SingleBlackBar message="Edukacja">
          <span className="m-3 text-white">
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown Ipsum has been the standard dummy text ever since the
            1500s, when an unknown Ipsum has been the standard dummy text ever since the 1500s, when an unknown
          </span>
        </SingleBlackBar>

        <SingleBlackBar message="Kursy">
          <span className="m-3 text-white">
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown Ipsum has been the standard dummy text ever since the
            1500s, when an unknown Ipsum has been the standard dummy text ever since the 1500s, when an unknown
          </span>
        </SingleBlackBar>

        <SingleBlackBar message="Doświadczenie zawodowe">
          <span className="m-3 text-white">
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown Ipsum has been the standard dummy text ever since the
            1500s, when an unknown Ipsum has been the standard dummy text ever since the 1500s, when an unknown
          </span>
        </SingleBlackBar>

        <SingleBlackBar message="Portfolio">
          <div>
            <span className="text-xm block m-3 text-blue-800">&#128206; Lorem ipsum lorem loreum </span>
            <span className="text-xm block m-3 text-blue-800">&#128206;Lorem ipsum lorem loreum </span>
          </div>
        </SingleBlackBar>
        <SingleBlackBar message="Projekt w zespole Scrumowym">
          <div>
            <span className="text-xm block m-3 text-blue-800">&#128206;Lorem ipsum lorem loreum </span>
            <span className="text-xm block m-3 text-blue-800">&#128206;Lorem ipsum lorem loreum </span>
          </div>
        </SingleBlackBar>
        <SingleBlackBar message="Projekt na zaliczenie">
          <div>
            <span className="text-xm block m-3 text-blue-800">&#128206; Lorem ipsum lorem loreum </span>
            <span className="text-xm block m-3 text-blue-800"> &#128206; Lorem ipsum lorem loreum </span>
          </div>
        </SingleBlackBar>
      </div>
    </div>
  </div>
);
