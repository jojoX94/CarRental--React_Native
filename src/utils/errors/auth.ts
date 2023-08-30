export class EmailAlreadyInUseError extends Error {}
export class WeakPasswordError extends Error {}
export class AuthError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
  }
}
