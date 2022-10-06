import React from "react";

export interface id {
    id?: string;
}

export interface className {
    className?: string;
}

export interface style {
    style?: React.CSSProperties;
}

export type selectors = id & className;

export type css = className & style;

export type relatedCss = selectors & css;