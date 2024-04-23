
import { loginSchema } from '../../schemas/FormSchemas';
import { useFormik } from "formik";

const LogainPage = () => {
    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
    };
    const {
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched, isSubmitting,
        values, resetForm
    } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, { setSubmitting }) => {
            const data = {
                email: values.email,
                password: values.password
            };
            console.log("data==>",data);
            try {
                setSubmitting(true);
                // const response = await userLogin(data);
                // // This is check Only Api Response 
                // if (!response.status) {
                //     dispatch(setErrorMessage(response.data.message));
                //     return;
                // }
                // if (!response.data.status) {
                //     dispatch(setErrorMessage(response.data.message));
                //     return;
                // }
                // dispatch(setSuccessMessage(response?.data?.message));
                // resetForm();
                // dispatch(login(response.data.data ?? null));
                // navigate('/dashboard');
            } catch (error) {
                // dispatch(setErrorMessage("Something is Wrong: error" + error));
            } finally {
                setSubmitting(false);
            }
        },
    });
    // console.log("errors", errors);
    // console.log("values", values);
    return (
        <div className="card-body">

            <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
            </div>

            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>

                <div className="col-12">
                    <label htmlFor="email" className="form-label">Email or Username</label>
                    <div className="input-group has-validation">
                        <input
                            type="text"
                            name="email"
                            className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                            id="email"
                            placeholder="Email or Username"
                            value={values.email}
                            onChange={handleChange}
                            error={touched.password && !!errors.email}
                            helperText={touched.password && errors.email}
                            disabled={isSubmitting}
                        />
                        {errors.email && touched.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                        )}
                    </div>
                </div>

                <div className="col-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className={`form-control ${errors.password && touched.password && 'is-invalid'}`}
                        id="yourPassword"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                    />
                    {errors.password && touched.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                    )}
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="rememberMe"
                            checked={values.rememberMe}
                            onChange={handleChange}
                            id="rememberMe"
                            disabled={isSubmitting}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">Login</button>
                </div>
                <div className="col-12">
                    <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                </div>
            </form>
        </div>
    )
}

export default LogainPage