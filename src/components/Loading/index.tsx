import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import "./style.css";

type ILoadingProps = {};

export default function Loading(props: ILoadingProps) {
  return (
    <div className="loading__icon__wrapper">
      <LoadingOutlined />
    </div>
  );
}
