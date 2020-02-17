// import React, { useState, FC } from 'react';

// import { FormType, FormField } from 'misc/types';

// // https://opentdb.com/api.php?amount=10&category=20&difficulty=easy

// export const Form: FC<FormType> = props => {
//   const { onSubmit, initialValues, validations } = props;
//   const [formValues, setFormValues] = useState < FormValues > initialValues;
//   const [formErrors, setFormErrors] = useState < FormErrors > initialValues;
//   console.log({ formValues });
//   console.log({ formErrors });

//   const handleFieldChange = (formField: FormField) => {
//     const { name, value } = formField;

//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleFieldValidate = (formField: FormField) => {
//     const { name, value } = formField;

//     if (!value) {
//       // @ts-ignore
//       setFormErrors({ ...formErrors, [name]: validations[name] });
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       {props.children({
//         formValues,
//         formErrors,
//         onFieldChange: handleFieldChange,
//       })}
//     </form>
//   );
// };
