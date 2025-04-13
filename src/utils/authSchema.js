import * as yup from "yup";

export const registeSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  displayName: yup.string().required("Display name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain a letter")
    .matches(/\d/, "Password must contain a number")
    .required("Password is required"),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  month: yup.string().required("Month is required"),
  day: yup.string().required("Day is required"),
  year: yup.string().required("Year is required"),
  terms: yup.bool().oneOf([true], "You must accept the Terms of Service"),
});

export const loginSchema = yup.object().shape({
  emailOrDisplayName: yup
    .string()
    .required("Email or Display Name is required"),
  password: yup.string().required("Password is required"),
  rememberMe: yup.boolean(),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "Password must contain at least one letter and one number"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const roleSchema = yup.object().shape({
  role: yup
    .string()
    .required("Please select a role")
    .oneOf(["developer", "gamer"], "Invalid role selected"),
});

export const profileSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  month: yup.string().required("Month is required"),
  day: yup.string().required("Day is required"),
  year: yup.string().required("Year is required"),
  displayName: yup.string().required("Display Name is required"),
  profileImage: yup
    .mixed()
    .test("fileType", "Only images (JPG, PNG) are allowed", (file) => {
      if (!file) return true;
      return ["image/jpeg", "image/jpg", "image/png"].includes(file.type);
    })
    .test("fileSize", "File size must be under 2MB", (file) => {
      if (!file) return true;
      return file.size <= 2 * 1024 * 1024;
    }),
});

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required("Current Password is required"),
  newPassword: yup
    .string()
    .required("New Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "Password must contain at least one letter and one number"
    ),
  confirmNewPassword: yup
    .string()
    .required("Confirm New Password is required")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});
