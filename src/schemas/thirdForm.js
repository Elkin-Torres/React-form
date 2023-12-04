import * as Yup from "yup";

export const thirdForm = Yup.object().shape({
    movieThirdForm:Yup.string().required("the movie is required"),
    theaterThirdForm:Yup.string().required("the movie is required"),
    pageThirdForm:Yup.string().oneOf(["TV","Social Media","Friend","Magazine","Other"],"Must select an option").required("Select an option"),
    notificationThirdForm:Yup.string().oneOf(["Yes","No"],"Must select an option").required("Select an option")
})