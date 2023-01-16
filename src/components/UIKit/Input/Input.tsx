import { InputHTMLAttributes, forwardRef } from "react"
import { Icon } from "components/UIKit"

type InputPropsBasics = {
  outlined?: boolean
  className?: string
  errorMessage?: string
  css?: string
  search?: boolean
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & InputPropsBasics

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, search, ...rest }, ref) => {
    return (
      <div
        className={`form-input ${className} ${search ? "search" : ""} ${
          errorMessage ? "has-error" : ""
        }`}
        ref={ref}
      >
        {search && <Icon name="search" />}
        <input {...rest} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"
