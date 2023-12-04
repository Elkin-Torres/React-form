import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
    emailSignIn:Yup.string().email("Enter a valid email").required("email is required"),
    passwordSignIn:Yup.string().min(8,"Password must be at least 7 characters").matches(/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/, "The password is not valid, it must contain at least: uppercase, lowercase, numbers, special character").required("Password is required")
})