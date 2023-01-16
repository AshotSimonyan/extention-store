import { InputHTMLAttributes, forwardRef } from "react"

type TextareaPropsBasics = {
  outlined?: boolean
  className?: string
  errorMessage?: string
  css?: string
}

type InputProps = InputHTMLAttributes<HTMLTextAreaElement> & TextareaPropsBasics

export const Textarea = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, ...rest }, ref) => {
    return (
      <div
        className={`form-input ${className} ${errorMessage ? "has-error" : ""}`}
        ref={ref}
      >
        <textarea {...rest} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    )
  }
)
Textarea.displayName = "Input"
