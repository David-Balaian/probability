import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/actions';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from "./constants";

export default function useAddItems() {
    const dispatch = useDispatch();

    const handleReset = () => {
        resetForm()
    }
    const handleSave = () => {
        dispatch(addItem({ ...values, id: Date.now() }))
        resetForm()
    }

    const { errors, touched, values, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        validateOnBlur: false,
        onSubmit: () => {
            handleSave();
        },
    });
    return {
        errors,
        touched,
        values,
        handleSubmit,
        handleChange,
        handleReset,
    }
}