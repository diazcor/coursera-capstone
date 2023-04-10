import React from "react";
import { Box } from '@chakra-ui/react';
import { TextField } from "@mui/material";
import validationsForm from "../validations/validationSchema";
import { withFormik } from "formik";
import * as yup from "yup";

const CustomForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box>
                    <h2>1 - Visit details</h2>

                    <Box bgColor="white" padding={10} borderRadius={16} display={"grid"} gridTemplateColumns={"repeat(2, 1fr)"} gridGap={20}>
                        <TextField
                            fullWidth
                            id="date"
                            label="Select Date"
                            type="date"
                            required
                            inputProps={{ "data-testid": "date" }}
                            onBlur={handleBlur}
                            value={values.date}
                            onChange={handleChange}
                            error={touched.date && Boolean(errors.date)}
                            helperText={touched.date && errors.date}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            fullWidth
                            id="time"
                            label="Select time"
                            type="time"
                            required
                            inputProps={{ "data-testid": "time" }}
                            onBlur={handleBlur}
                            value={values.time}
                            onChange={handleChange}
                            error={touched.time && Boolean(errors.time)}
                            helperText={touched.time && errors.time}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            fullWidth
                            id="dinners"
                            label="Amout of dinners"
                            type="number"
                            required
                            inputProps={{ "data-testid": "dinners" }}
                            onBlur={handleBlur}
                            value={values.dinners}
                            onChange={handleChange}
                            error={touched.dinners && Boolean(errors.dinners)}
                            helperText={touched.dinners && errors.dinners}
                        />

                        <TextField
                            fullWidth
                            id="occasion"
                            label="Occasion"
                            type="text"
                            onBlur={handleBlur}
                            value={values.occasion}
                            onChange={handleChange}
                            error={touched.occasion && Boolean(errors.occasion)}
                            helperText={touched.occasion && errors.occasion}
                        />
                    </Box>
                </Box>

                <Box>
                    <h2>2 - Personal details</h2>

                    <Box bgColor="white" padding={10} borderRadius={16} display={"grid"} gridTemplateColumns={"repeat(2, 1fr)"} gridGap={20}>
                        <TextField
                            id="name"
                            label="First name"
                            type="text"
                            required
                            inputProps={{ "data-testid": "name" }}
                            onBlur={handleBlur}
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />

                        <TextField
                            id="surname"
                            label="Last name"
                            type="text"
                            required
                            inputProps={{ "data-testid": "lastName" }}
                            value={values.surname}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.surname && Boolean(errors.surname)}
                            helperText={touched.surname && errors.surname}
                        />

                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            required
                            inputProps={{ "data-testid": "email" }}
                            name="email"
                            onBlur={handleBlur}
                            value={values.email}
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            validateOnBlur
                        />

                        <TextField
                            id="phone"
                            label="Phone number"
                            type="tel"
                            required
                            inputProps={{ "data-testid": "phone" }}
                            name="phone"
                            value={values.phone}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.phone && Boolean(errors.phone)}
                            helperText={touched.phone && errors.phone}
                        />
                    </Box>
                </Box>

                <Box>
                    <h2>3 - Additional request</h2>

                    <Box bgColor="white" padding={10} borderRadius={16} gap={15} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <TextField fullWidth multiline type="text" label="comment" />
                    </Box>

                    <Box padding={10} borderRadius={16} gap={15} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <button type="submit" data-testid="submit-btn" className="action-btn">
                            <p className="action-btn-children">Reserve</p>
                        </button>
                    </Box>
                </Box >
            </form>
        </>
    );
};

const Form = withFormik({
    mapPropsToValues: ({
        date,
        time,
        dinners,
        occasion,
        name,
        surname,
        email,
        phone,
        comment,
    }) => {
        return {
            date: date || "",
            time: time || "",
            dinners: dinners || "",
            occasion: occasion || "",
            name: name || "",
            surname: surname || "",
            email: email || "",
            phone: phone || "",
            comment: comment || "",
        };
    },

    validationSchema: yup.object().shape(validationsForm),

    handleSubmit: async (values, { setSubmitting }) => {
        setTimeout(() => {
            alert("Done, check your email!")
            setSubmitting(false);
        }, 1500);
    }
})(CustomForm);

export default (Form);
