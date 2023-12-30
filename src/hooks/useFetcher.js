import { useEffect, useReducer, useCallback, useMemo } from "react";

const initialState = {
  data: null,
  error: null,
  isLoading: true,
};

const ACTIONS = {
  SET_DATA: "SET_DATA",
  SET_ERROR: "SET_ERROR",
  RESET: "RESET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        ...state,
        error: null,
        data: action.payload,
        isLoading: false,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload,
        isLoading: false,
      };
    case ACTIONS.RESET:
      return initialState;
    default:
      return initialState;
  }
};

const useFetcher = (
  fetcher,
  fetcherArguments,
  { initialData = null, initialState = true } = {}
) => {
  const [{ isLoading, error, data }, dispatch] = useReducer(reducer, {
    ...initialState,
    isLoading: initialState,
    data: initialData,
  });

  const fetchData = useCallback(async () => {
    try {
      const args = [
        ...(Array.isArray(fetcherArguments)
          ? fetcherArguments
          : [fetcherArguments]),
      ];
      const data = await fetcher(...args);
      dispatch({ type: ACTIONS.SET_DATA, payload: data });
      console.log("The fetched data is ", data);
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: error.message ?? "An error occurred, please try again",
      });
    }
  }, [fetcher, fetcherArguments]);

  const refetch = useCallback(async () => {
    dispatch({ type: ACTIONS.RESET });
    await fetchData();
  }, [dispatch, fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const info = useMemo(() => {
    return {
      isLoading,
      error,
      data,
      refetch,
    };
  }, [isLoading, error, data, refetch]);

  return info;
};

export default useFetcher;
