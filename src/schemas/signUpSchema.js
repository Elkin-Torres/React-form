import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
    fullNameSignUp: Yup.string().required("Full name is required"),
    emailSignUp: Yup.string().email("Enter a valid email").required("email is required"),
    passwordSignUp: Yup.string().min(8, "Password must be at least 7 characters").matches(/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/, "The password is not valid, it must contain at least: uppercase, lowercase, numbers, special character").required("Password is required"),
    passwordSignUpConfirm: Yup.string().oneOf([Yup.ref("passwordSignUp"), null], "Passwords must match").required("Confirm password"),
    genreSignUp: Yup.string().oneOf(["Drama","Horror","Action","Adventure","Family"],"Must select a genre").required("Select a genre"),
    termsSignUp: Yup.bool().oneOf([true], "You must accept terms").required("acceptance of terms is required")
})