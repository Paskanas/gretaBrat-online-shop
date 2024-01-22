import { HTMLAttributes } from "react";

export default function InputError({ message, className = '' }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? <p className={'text-sm text-red-600 ' + className}>{message}</p> : null;
}
