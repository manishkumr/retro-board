declare namespace Express {
  interface User {
    // TODO: replace that by User in common
    id: string;
    name: string;
    accountType: AccountType;
    username: string | null;
    photo: string | null;
  }

  interface Session {
    socketId: string;
    passport: {
      user: User
    }
  }
}