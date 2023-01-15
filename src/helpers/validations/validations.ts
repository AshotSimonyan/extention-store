import {messages} from "./messages";
import {RegisterOptions} from "react-hook-form/dist/types/validator";

export const required: RegisterOptions = {
    required: messages.required,
}

export const maxLength: RegisterOptions = {
    required: messages.required,
    maxLength: {
        value: 100,
        message: messages.maxLength
    }
}

export const minLength: RegisterOptions = {
    required: messages.required,
    minLength: {
        value: 300,
        message: messages.minLength
    }
}
