// contexts/DictionaryContext.jsx
"use client";

import dictionaryEn from "@/dictionaries/en.json";
import { createContext, PropsWithChildren, useContext } from "react";

const DictionaryContext = createContext({} as typeof dictionaryEn);

export function DictionaryProvider({
  dictionary,
  children,
}: PropsWithChildren<{ dictionary: any }>) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  return useContext(DictionaryContext);
}
