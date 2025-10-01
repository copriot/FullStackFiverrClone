type ExtendedError = Error & { status: number };

const error = (status: number, message: string) => {
  //bir error nesnesi olustur
  const err = new Error(message) as ExtendedError;

  err.status = status;
  return err;
};

export default error;
