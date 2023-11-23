"use client";

import { ListWithCards } from "@/types";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

import React from "react";
import { ListForm } from "./list-form";

export const ListContainer = ({ boardId, data }: ListContainerProps) => {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};
