import { Link } from 'react-router-dom';
import { signUpSchema } from '../../schemas/FormSchemas';
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import icons from React Icons
import { useState } from 'react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    iAgree: false,
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
    validationSchema: signUpSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };
      try {
        console.log("data", data);
        setSubmitting(true);
        // const response = await userSignUp(data);
        // if (response.status) {
        //     resetForm();
        //     dispatch(setSuccessMessage(response.data.message));
        // } else {
        //     dispatch(setErrorMessage(response.data.message));
        // }
      } catch (error) {
        dispatch(setErrorMessage(error));
      } finally {
        setSubmitting(false);
      }
    },
  });

  console.log("errors", errors);
  return (
    <div className="card-body">
      <div className="pt-4 pb-2">
        <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
      </div>
      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="col-6">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <div className="input-group has-validation">
            <input
              type="text"
              name="firstName"
              className={`form-control ${errors.firstName && touched.firstName ? 'is-invalid' : touched.firstName ? 'is-valid' : ''}`}
              id="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.firstName && touched.firstName && (
              <div className="invalid-feedback">{errors.firstName}</div>
            )}
          </div>
        </div>
        <div className="col-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <div className="input-group has-validation">
            <input
              type="text"
              name="lastName"
              className={`form-control ${errors.lastName && touched.lastName ? 'is-invalid' : touched.lastName ? 'is-valid' : ''}`}
              id="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.lastName && touched.lastName && (
              <div className="invalid-feedback">{errors.lastName}</div>
            )}
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-group has-validation">
            <input
              type="text"
              name="email"
              className={`form-control ${errors.email && touched.email ? 'is-invalid' : touched.email ? 'is-valid' : ''}`}
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
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
            type={showPassword ? "text" : "password"}
            name="password"
            className={`form-control ${errors.password && touched.password ? 'is-invalid' : touched.password ? 'is-valid' : ''}`}
            id="yourPassword"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
          {showPassword ?
            <AiOutlineEyeInvisible
              className='password-icon'
              onClick={togglePasswordVisibility}
            /> :
            <AiOutlineEye
              className='password-icon'
              onClick={togglePasswordVisibility}

            />}

          {errors.password && touched.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : touched.confirmPassword ? 'is-valid' : ''}`}
            id="yourPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="iAgree"
              checked={values.iAgree}
              onChange={handleChange}
              id="iAgree"
              disabled={isSubmitting}
            />
            <label className="form-check-label" htmlFor="iAgree">I agree and accept the <a href="#">terms and conditions</a></label>
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="invalid-feedback">{errors.confirmPassword}</div>
            )}
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100" type="submit">Login</button>
        </div>
        <div className="col-12">
          <p className="small mb-0">Already have an account <Link to={'/auth/login'}> Login</Link></p>
        </div>
      </form>
    </div>
  )
}
export default SignupPage