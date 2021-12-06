export interface InitialState {
  loading?: boolean;
  error?: any | null;
}

export interface ClearErrorAction {
  type: "CLEAR_ERRORS";
}
