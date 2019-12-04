//@ts-ignore
import React from "react";

const { createContext } = React;
interface IState {
  lang: [];
}

const initialState: IState = {
  lang: []
};
export const Store = createContext<IState>(initialState);

console.log("here");
export function StoreProvider(props: any): JSX.Element {
  //@ts-ignore
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
