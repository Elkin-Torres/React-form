import * as Yup from "yup";

export const recoverPasswordSchema = Yup.object().shape({
    emailRecover:Yup.string().email("Please, type a valid email!").required("The email is required!")
});