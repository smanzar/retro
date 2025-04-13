import * as yup from "yup";

// URL validation regex
const urlRegex =
  /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

// Step 1 validation schema
export const step1Schema = yup.object({
  title: yup.string().required("Title is required"),
  selectedGenres: yup
    .array()
    .min(1, "Select at least one genre")
    .required("Genre is required"),
  selectedFeatures: yup
    .array()
    .min(1, "Select at least one feature")
    .required("Feature is required"),
  dateVal: yup.string().nullable().required("Release date is required"),
  price: yup.string().required("Price is required"),
  selectedRating: yup.string().required("Rating is required"),
  publisher: yup.string().required("Publisher is required"),
  developer: yup.string().required("Developer is required"),
  description: yup
    .string()
    .min(10, "Description must be at least 10 characters"),
  // logoFile is optional
});

// Step 2 validation schema
export const step2Schema = yup.object({
  gameFile: yup.mixed().required("Game file is required"),
  mediaFiles: yup
    .array()
    .min(1, "At least one media file is required")
    .required("Media files are required"),
  defaultThumbnail: yup.number().required("Default thumbnail is required"),
});

// Step 3 validation schema
export const step3Schema = yup.object({
  website: yup.string().matches(urlRegex, "Enter a valid URL").nullable(),
  twitter: yup.string().matches(urlRegex, "Enter a valid URL").nullable(),
  discord: yup.string().matches(urlRegex, "Enter a valid URL").nullable(),
  youtube: yup.string().matches(urlRegex, "Enter a valid URL").nullable(),
  facebook: yup.string().matches(urlRegex, "Enter a valid URL").nullable(),
  instagram: yup.string().matches(urlRegex, "Enter a valid URL").nullable(),
});

// Step 4 validation schema
export const step4Schema = yup.object({
  operatingSystem: yup.string().required("Operating system is required"),
  processor: yup.string().required("Processor is required"),
  memory: yup.string().required("Memory is required"),
  graphics: yup.string().required("Graphics is required"),
  directX: yup.string().required("DirectX is required"),
  storage: yup.string().required("Storage is required"),
});
