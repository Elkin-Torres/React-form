import * as Yup from "yup";

export const secondForm = Yup.object().shape({
    genreSecondForm:Yup.string().oneOf(["Drama","Horror","Action","Adventure","Family"],"Must select a genre").required("Select a genre"),
    deviceSecondForm:Yup.string().oneOf(["TV","Cell phone","Tablet","All the above"],"Must select a device").required("Select a device"),
    streamingSecondForm:Yup.string().oneOf(["Yes","No"],"Select is required").required("Select is required"),
    platformsSecondForm:Yup.string().required("This field is required")
})