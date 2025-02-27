"use client";

import { Book } from "@/utils/types/books";
import { User } from "@/utils/types/user";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface GlobalData {
  currentUser?: User;
  deliveryAddress?: string;
  cart: {
    book: Book[];
    totalAmount: number;
    totalCount: number;
  };
  email?: string;
}

export interface AppContextData {
  data: GlobalData;
  setGlobalState: Dispatch<SetStateAction<GlobalData>>;
}

const AppContext = createContext<AppContextData>({
  data: {
    currentUser: undefined,
    deliveryAddress: "",
    cart: {
      book: [],
      totalAmount: 0,
      totalCount: 0,
    },
    email: "",
  },
  setGlobalState: () => {},
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [globalState, setGlobalState] = useState<GlobalData>(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("appGlobalState");
      return storedData
        ? JSON.parse(storedData)
        : {
            currentUser: undefined,
            deliveryAddress: "",
            cart: {
              book: [],
              totalAmount: 0,
              totalCount: 0,
            },
            email: "",
          };
    }
    return {
      currentUser: undefined,
      deliveryAddress: "",
      cart: {
        book: [],
        totalAmount: 0,
        totalCount: 0,
      },
      email: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("appGlobalState", JSON.stringify(globalState));
  }, [globalState]);

  const value = useMemo(() => {
    return { data: globalState, setGlobalState };
  }, [globalState, setGlobalState]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
