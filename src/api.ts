import { AppState } from './AppStateContext';

export const save = (payload: AppState) =>
  fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .catch(console.log);

export const load = () =>
  fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`).then(res => res.json() as Promise<AppState>);
