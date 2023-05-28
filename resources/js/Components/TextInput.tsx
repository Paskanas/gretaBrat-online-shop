import { InputHTMLAttributes, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput({
    type = 'text',
    className = '',
    isFocused = false,
    ...props
}: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean }, ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md pl-2 shadow-sm ` +
                    className
                }
                ref={localRef}
            />
        </div>
    );
});
