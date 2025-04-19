import { H3Error } from 'h3';
import { FetchError } from 'ofetch';

const unknownMessage = 'Упс, что-то пощло не так.';

export const useApiErrorHandler = (e: unknown) => {
  if (e instanceof FetchError || e instanceof H3Error) {
    const status = e.data?.status || e.statusCode;
    const message = e.data?.message || e.message || e.statusMessage;

    throw createError({
      status: status || 500,
      message: message || unknownMessage,
      fatal: true,
    });
  }

  if (e instanceof Error) {
    throw createError({
      message: e.message || unknownMessage,
      fatal: true,
    });
  }

  throw createError({
    message: unknownMessage,
    fatal: true,
  });
};
