"use client";

import { store } from "@/redux/features/store";
import React, { PropsWithChildren } from "react";

import { Provider } from "react-redux";

const StoreProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
