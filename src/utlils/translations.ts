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
    buttons: {
      add: 'Prześlij plik',
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
};
