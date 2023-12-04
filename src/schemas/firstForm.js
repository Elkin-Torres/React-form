import * as Yup from "yup";

export const firstForm = Yup.object().shape({
    namesFirstForm:Yup.string().matches(/^([ a-zA-ZñÑáéíóúÁÉÍÓÚ]).{2,254}/,"only letters are allowed").required("Names are required"),
    surnamesFirstForm:Yup.string().matches(/^([ a-zA-ZñÑáéíóúÁÉÍÓÚ]).{2,254}/,"only letters are allowed").required("Surnames are required"),
    documentFirstForm:Yup.string().oneOf(["citizenship card","identity card","passport"],"Must select a document type").required("Select a document type"),
    genreFirstForm:Yup.string().oneOf(["Female","Male","Other","I prefer not to answer"],"Must select a genre").required("Select a genre"),
    ageFirstForm:Yup.string().matches(/^([0-9]).{1,2}$/,"only numbers are allowed").required("Age is required")
})