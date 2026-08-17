"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import AnimatedSection from "./AnimatedSection";

const initialValues = {
  name: "",
  organization: "",
  phone: "",
  email: "",
  city: "",
  state: "",
  county: "",
  zipCode: "",
  needs: "",
  comments: "",
};

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),

  organization: Yup.string().trim(),

  phone: Yup.string()
    .trim()
    .required("Phone number is required")
    .matches(/^[\d\s()+-]{7,20}$/, "Enter a valid phone number"),

  email: Yup.string()
    .trim()
    .email("Enter a valid e-mail address")
    .required("E-mail is required"),

  city: Yup.string().trim().required("City is required"),

  state: Yup.string().trim().required("State is required"),

  county: Yup.string().trim().required("County is required"),

  zipCode: Yup.string()
    .trim()
    .required("Zip Code is required")
    .matches(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code"),

  needs: Yup.string().required("Please choose an option"),

  comments: Yup.string().trim(),
});

export default function Contact() {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      console.log("Form data to be sent:", values);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Your request has been sent successfully!");
      resetForm();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
        }}
      />

      <AnimatedSection className="bg-white px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-[#333] md:text-5xl">
              Contacts
            </h1>

            <div className="mx-auto mt-10 grid max-w-[900px] gap-8 md:grid-cols-3">
              <div className="flex items-start justify-center gap-3 text-left">
                <MapPin size={20} className="mt-1 shrink-0 text-[#08752E]" />

                <p className="text-sm font-medium leading-5 text-[#444]">
                  1733 Benbow Ct, Ste 3,
                  <br />
                  Apopka, FL, 32703
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#08752E]" />

                  <a
                    href="tel:+17866005909"
                    className="text-sm font-medium text-[#444] transition hover:text-[#08752E]"
                  >
                    (786) 600-59-09
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#08752E]" />

                  <a
                    href="mailto:support@mealsamericafl.com"
                    className="text-sm font-medium text-[#444] transition hover:text-[#08752E]"
                  >
                    support@mealsamericafl.com
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-center gap-3 text-left">
                <Clock size={20} className="mt-1 shrink-0 text-[#08752E]" />

                <p className="text-sm font-medium leading-5 text-[#444]">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-[800px]">
            <h2 className="text-center text-4xl font-extrabold text-[#333] md:text-5xl">
              Get started
            </h2>

            <p className="mx-auto mt-5 max-w-[600px] text-center text-sm leading-5 text-[#777]">
              Please complete the form below. Due to current high demand, we
              will do our best to reply back to you within 48 business hours.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="mt-10 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-3">
                  <FormField name="name" label="Name" required />

                  <FormField name="organization" label="Organization" />

                  <FormField
                    name="phone"
                    label="Phone Number"
                    required
                    type="tel"
                  />

                  <FormField
                    name="email"
                    label="E-mail Address"
                    required
                    type="email"
                  />

                  <FormField name="city" label="City" required />

                  <FormField name="state" label="State" required />

                  <FormField name="county" label="County" required />

                  <FormField name="zipCode" label="Zip Code" required />

                  <div>
                    <label className="mb-2 block text-xs font-medium text-[#666]">
                      Tell us about your needs
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <Field
                      as="select"
                      name="needs"
                      className="h-[44px] w-full rounded-md border border-[#CFE3D3] bg-white px-4 text-sm text-[#333] outline-none transition focus:border-[#08752E] focus:ring-1 focus:ring-[#08752E]"
                    >
                      <option value="">—Please choose an option—</option>

                      <option value="home-meal-delivery">
                        Home Meal Delivery
                      </option>

                      <option value="aging-waiver">Aging Waiver</option>

                      <option value="case-manager">
                        Case Manager / Coordinator
                      </option>

                      <option value="individual-caregiver">
                        Individual / Caregiver
                      </option>

                      <option value="private-customer">Private Customer</option>

                      <option value="other">Other</option>
                    </Field>

                    <ErrorMessage
                      name="needs"
                      component="p"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="mb-2 block text-xs font-medium text-[#666]">
                      Provide any additional comments
                    </label>

                    <Field
                      as="textarea"
                      name="comments"
                      rows={5}
                      className="w-full resize-none rounded-md border border-[#CFE3D3] px-4 py-3 text-sm text-[#333] outline-none transition focus:border-[#08752E] focus:ring-1 focus:ring-[#08752E]"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full bg-[#08752E] px-10 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#075e26] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

function FormField({ name, label, required = false, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-[#666]">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <Field
        name={name}
        type={type}
        className="h-[44px] w-full rounded-md border border-[#CFE3D3] bg-white px-4 text-sm text-[#333] outline-none transition focus:border-[#08752E] focus:ring-1 focus:ring-[#08752E]"
      />

      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-xs text-red-500"
      />
    </div>
  );
}
