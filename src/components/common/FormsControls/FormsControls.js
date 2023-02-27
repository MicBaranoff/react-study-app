import React from "react";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error &&  meta.touched;
    return (
        <div>
            <textarea {...input}
                      placeholder={props.placeholder}
                      className={hasError ? props.className + ' error' : props.className}>
            </textarea>
            { hasError && <span className={'text-error'}>{meta.error}</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error &&  meta.touched;
    return (
        <div>
            <input {...input}
                      placeholder={props.placeholder}
                      className={hasError ? props.className + ' error' : props.className}>
            </input>
            { hasError && <span className={'text-error'}>{meta.error}</span> }
        </div>
    )
}