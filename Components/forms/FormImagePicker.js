import React from 'react';
import {View, StyleSheet, ImageBase} from 'react-native';

import ImageInputList from '../ImageInputList';
import  ErrorMessage  from './ErrorMessage';
import {useFormikContext} from 'formik';

function FormImagePicker ({values,handleAdd,handleRemove,errors,touched}) {
    // const { errors, setFieldValue, touched, values } = useFormikContext();
    // const imageUris = values[name];

    // const handleAdd = (uri) => {
    //     setFieldValue(name, [...imageUris, uri]);
    //   }

    //   const handleRemove = (uri) => {
    //     setFieldValue(name, values[name].filter(imageUri => imageUri  !== uri))
    //   };    

    return (
    <>
    <ImageInputList
        imageUris={values}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
    />
    <ErrorMessage error={errors} visible={touched} />
    </>

   );
 }


const styles = StyleSheet.create({
container:{
}
 })
export default FormImagePicker;