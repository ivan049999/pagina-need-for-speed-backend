export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly code: string,
    message?: string | Record<string, unknown>,
  ) {
    super(typeof message === "string" ? message : JSON.stringify(message));
    this.name = "AppError";
  }
}
