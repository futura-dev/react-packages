import { useCallback, useEffect, useReducer, Reducer } from "react";

type SuccessReturnType<SUCCESS> = {
  status: "success";
  response: SUCCESS;
  error: undefined;
  load: () => () => void;
};

type ErrorReturnType<ERROR> = {
  status: "error";
  response: undefined;
  error: ERROR;
  load: () => () => void;
};

type LoadingReturnType = {
  status: "loading";
  response: undefined;
  error: undefined;
  load: () => () => void;
};

type ReturnType<SUCCESS, ERROR> = SuccessReturnType<SUCCESS> | ErrorReturnType<ERROR> | LoadingReturnType;

type ReducerStateType<SUCCESS, ERROR> =
  | Omit<SuccessReturnType<SUCCESS>, "load">
  | Omit<ErrorReturnType<ERROR>, "load">
  | Omit<LoadingReturnType, "load">;

type ErrorStatusAction<ERROR> = {
  type: "SET_ERROR";
  payload: ERROR;
};

type SuccessStatusAction<SUCCESS> = {
  type: "SET_SUCCESS";
  payload: SUCCESS;
};

type ReducerActionsType<SUCCESS, ERROR> = SuccessStatusAction<SUCCESS> | ErrorStatusAction<ERROR>;

function apiStatusReducer<SUCCESS, ERROR>(
  state: ReducerStateType<SUCCESS, ERROR>,
  action: ReducerActionsType<SUCCESS, ERROR>
): ReducerStateType<SUCCESS, ERROR> {
  switch (action.type) {
    case "SET_ERROR":
      return {
        status: "error",
        response: undefined,
        error: action.payload,
      };
    case "SET_SUCCESS":
      return {
        status: "success",
        response: action.payload,
        error: undefined,
      };
    default:
      return state;
  }
}

interface Meta<SUCCESS, ERROR> {
  onSuccess?: (response?: SUCCESS) => void;
  onError?: (error?: ERROR) => void;
  start?: boolean;
}

/**
 * useApi
 *
 * @param api
 * @param meta
 */
export function useApi<ERROR extends { message: string }, SUCCESS>(
  api: (...args: readonly any[]) => Promise<SUCCESS>,
  _error: ERROR,
  meta?: Meta<SUCCESS, ERROR>
): ReturnType<SUCCESS, ERROR> {

  const {
    onSuccess,
    onError,
    start = true
  } = meta || {};

  const load = useCallback(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    api(signal)
      .then((response) => {
        if (!signal.aborted) {
          dispatch({ type: "SET_SUCCESS", payload: response });
          onSuccess && onSuccess(response);
        }
      })
      .catch((error: ERROR) => {
        if (!signal.aborted) {
          dispatch({ type: "SET_ERROR", payload: error });
          onError && onError(error);
        }
      });

    return () => controller.abort();
  }, [api, onSuccess, onError]);

  const [state, dispatch] = useReducer<
    Reducer<ReducerStateType<SUCCESS, ERROR>, ReducerActionsType<SUCCESS, ERROR>>
  >(apiStatusReducer<SUCCESS, ERROR>, {
    status: "loading",
    response: undefined,
    error: undefined,
  });

  useEffect(() => {
    start && load();
  }, [start, load]);

  return {
    ...state,
    load,
  };
}
