import React, { LabelHTMLAttributes } from 'react';

export default function InputLabel({ forInput, value, className, children }:
    LabelHTMLAttributes<HTMLLabelElement> &
    //klausimas ar gerai
    { value?: string, forInput?: string }) {
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
