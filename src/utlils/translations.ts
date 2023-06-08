export const translations = {
  login: {
    links: {
      forgotPassword: 'Zapomniałeś hasła?',
      register: 'Zarejestruj się',
    },
    descriptions: {
      noAccount: 'Nie masz konta?',
    },
    form: {
      placeholders: {
        email: 'Podaj email',
        password: 'Podaj hasło',
      },
      schema: {
        email: {
          required: 'Email jest wymagany',
          normal: 'Email musi mieć odpowiedni format',
        },
        password: {
          required: 'Hasło jest wymagane',
          min: 'Hasło musi mieć co najmniej 8 znaków',
        },
      },
      submit: 'Zaloguj się',
    },
  },
  registration: {
    form: {
      placeholders: {
        password: 'Podaj hasło',
        repeatPassword: 'Powtórz hasło',
      },
      schema: {
        email: {
          required: 'Email jest wymagany',
          normal: 'Email musi mieć odpowiedni format',
        },
        password: {
          required: 'Hasło jest wymagane',
          min: 'Hasło musi mieć co najmniej 8 znaków',
          max: 'Hasło może mieć maksymalnie 24 znaki',
          smallLetter: 'Hasło musi zawierać co najmniej jedną małą literę',
          bigLetter: 'Hasło musi zawierać co najmniej jedną dużą literę',
          number: 'Hasło musi zawierać co najmniej jedną cyfrę',
          specialCharacter: 'Hasło musi zawierać co najmniej jeden znak specjalny',
          repeatPassword: 'Powtórzenie hasła jest wymagane',
          match: 'Hasła muszą się zgadzać',
        },
      },
      submit: 'Zarejestruj się',
    },
  },
  fileInputField: {
    placeholder: 'Brak pliku',
  },

  navbar: {
    links: {
      addStudents: 'Dodaj Kursantów',
      addHr: 'Dodaj Rekrutera',
      availableStudents: 'Dostępni Kursanci',
      toTalk: 'Do rozmowy',
    },
  },
  addStudents: {
    title: 'Dodaj Kursantów',
    form: {
      schema: {
        required: 'Plik jest wymagany',
        fileFormat: 'Nieprawidłowy format pliku - musi być .csv',
        fileSize: 'Plik jest za duży - maksymalny rozmiar to 20MB',
      },
      submit: 'Prześlij plik',
      chooseFile: 'Wybierz plik',
    },
  },
  addHr: {
    title: 'Dodaj Rekrutera',
    form: {
      placeholders: {
        email: 'Podaj email',
        fullName: 'Podaj imię i nazwisko',
        company: 'Podaj nazwę firmy',
        maxReservedStudents: 'Podaj maksymalną ilość kursantów',
      },
      schema: {
        email: {
          required: 'Email jest wymagany',
          normal: 'Email musi mieć odpowiedni format',
        },
        fullName: {
          required: 'Imię jest wymagane',
          min: 'Imię musi mieć co najmniej 3 znaki',
          max: 'Imię może mieć maksymalnie 150 znaków',
        },
        company: {
          required: 'Nazwa firmy jest wymagana',
          min: 'Nazwa firmy musi mieć co najmniej 8 znaków',
          max: 'Nazwa firmy może mieć maksymalnie 150 znaków',
        },
        maxReservedStudents: {
          required: 'Wymagane jest podanie minimalnej ilości studentów do rekrutacji',
          min: 'Minimalna ilość studentów to 1',
          max: 'Maksymalna ilość studentów to 999',
        },
      },
      submit: 'Dodaj',
    },
  },
  studentDetails: {
    labels: {
      courseCompletion: 'Ocena przejścia kursu',
      courseEngagement: 'Ocena aktywności i zaangażowania na kursie',
      projectDegree: 'Ocena kodu w projekcie własnym',
      teamProjectDegree: 'Ocena pracy w zespole Scrum',
      expectedTypeWork: 'Preferowane miejsce pracy',
      targetWorkCity: 'Docelowe miasto, gdzie chce pracować kandydat',
      expectedContractType: 'Oczekiwany typ kontraktu',
      expectedSalary: 'Oczekiwane wynagrodzenie miesięczne netto',
      canTakeApprenticeship: 'Zgoda na odbycie bezpłatnych praktyk/stażu na początek',
      monthsOfCommercialExp: 'Komercyjne doświadczenie w programowaniu',
    },
    values: {
      expectedTypeWork: {
        ONSITE: 'Tylko w biurze',
        RELOCATION_READY: 'Gotowy do przeprowadzki',
        REMOTE_ONLY: 'Wyłącznie zdalnie',
        HYBRID: 'Hybrydowy',
        NO_PREFERENCE: 'Bez znaczenia',
      },
      expectedContractType: {
        UOP_ONLY: 'Tylko UoP',
        B2B_POSSIBLE: 'Możliwe B2B',
        UZ_UOD_POSSIBLE: 'Możliwe UZ/UoD',
        NO_PREFERENCE: 'Bez preferencji',
      },
      boolean: {
        true: 'TAK',
        false: 'NIE',
      },
    },
  },
  studentRow: {
    buttons: {
      bookACall: 'Zarezerwuj rozmowę',
    },
  },
};
