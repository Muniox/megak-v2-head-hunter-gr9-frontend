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
  studentInfo: {
    schema: {
      bio: {
        max: 'Maksymalnie 1000 znaków.',
      },
      courses: {
        max: 'Maksymalna ilość 2000 znaków.',
      },
      education: {
        max: 'Maksymalnie 2000 znaków.',
      },
      expectedContractType: {
        required: 'Pole wymagane',
      },
      expectedSalary: {
        min: 'Minimalna wartość 1',
        max: 'Maksymalna wartość 9999999999',
      },
      expectedTypeWork: {
        required: 'Pole wymagane',
      },
      githubUsername: {
        min: 'Minimalna ilość znaków 1',
        max: 'Maksymalna ilość znaków 39',
        matches: 'Podaj poprawny nick z githuba',
        required: 'Pole wymagane',
      },
      monthsOfCommercialExp: {
        min: 'Minimalna ilość miesięcy nie może być mniejsza niż 0',
        reqired: 'Pole wymagane',
      },
      portfolioUrls: {
        url: 'Podaj prawidłowy link do portfolio',
      },
      projectUrls: {
        url: 'Podaj prawidłowy link do projektu',
      },
      targetWorkCity: {
        min: 'Minimalna ilość znaków 1',
        max: 'Maksymalna ilość znaków 100',
      },
      workExperience: {
        max: 'Maksymalna ilość znaków 2000',
      },
      tel: {
        matches: 'Podaj poprawny numer telefonu',
      },
      firstName: {
        min: 'Minimalna ilość znaków 1',
        max: 'Maksymalna ilość znaków 50',
        required: 'Pole wymagane',
      },
      lastName: {
        min: 'Minimalna ilość znaków 1.',
        max: 'Maksymalna ilość znaków 50.',
        required: 'Pole wymagane',
      },
    },
  },
};
