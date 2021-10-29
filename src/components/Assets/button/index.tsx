/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
    className = "",
    children,
    ...rest
}) => (
    <button
        type="button"
        className={`py-2 px-4 rounded-2  outline-none  focus:outline-none    text-white ${className}`}
        {...rest}
    >
        {children}
    </button>
);
