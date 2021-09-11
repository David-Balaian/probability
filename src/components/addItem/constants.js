import * as Yup from 'yup'

export const itemValues = [
    { label: "name", type: "string" }, 
    { label: "price", type: "number" }, 
    { label: "weight", type: "number" }, 
    { label: "start date", type: "date" }, 
    { label: "end date", type: "date" }, 
];

export const initialValues = {
    name: '',
    price: '',
    weight: '',
    'start date': '',
    'end date': '',
}

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('name is required'),
    price: Yup.number().typeError('must be number').required('price is required'),
    weight: Yup.number().typeError('must be number').required('weight is required'),
    'start date': Yup.date().typeError('must be vaild date'),
    'end date': Yup.date().typeError('must be vaild date'),
});