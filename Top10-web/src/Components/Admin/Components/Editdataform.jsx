import React, { useState, useEffect } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../Utils/axios";
import Axios from "../Utils/Service/axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Editdataform = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [companies, setCompanies] = useState({});
  const [currentService, setCurrentService] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { Id } = useParams();

  

  useEffect(() => {
    if (Id) {
      axios
        .get("/getsinglecompanydata?id=" + Id)
        .then((response) => {
          const companyData = response.data.data[0];
          setCompanies(companyData);
          setServices(companyData.services || []);
          setSelectedFile(companyData.image || null);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error.message);
          setLoading(false);
        });
    }
  }, [Id]);

 
  const handleAddService = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const service = currentService.trim();
      if (service !== "") {
        setServices([...services, service]);
        setCurrentService("");
      }
    }
  };

  const handleChange = (event) => {
    setCurrentService(event.target.value);
  };

  const handleRemoveService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      companyType: companies?.companyType || "",
      companyName: companies?.companyName || "",
      about: companies?.about || "",
      profileImage:companies?.image || null,
      websiteLink: companies?.websiteLink || "",
      location: companies?.location || "",
      email: companies?.email || "",
      numberOfEmployees: companies?.numberOfEmployees || "",
      year: companies?.year || "",
      services: companies?.services || [],
    },
    validationSchema: Yup.object({
      companyType: Yup.string().required("Required"),
      companyName: Yup.string().required("Required"),
      about: Yup.string().required("Required"),
      profileImage: Yup.string().required("Required"),
      websiteLink: Yup.string().url("Invalid URL").required("Required"),
      location: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      numberOfEmployees: Yup.string().required("Required"),
      year: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const fileimg = values.profileImage;
     
    
      if (fileimg) {
        try {
          const imageResponse = await Axios.get("/s3service");
          imageUrl = imageResponse.data.response;
    
          const imageUploadResponse = await fetch(imageUrl, {
            method: "PUT",
            body: fileimg,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
    
          const userimage = imageUrl.split("?")[0];
          formik.setFieldValue("userimage", userimage);
        } catch (error) {
          console.error("Error uploading image:", error);
          
        }
      }
      let imageUrl = companies.image; 
      const body = {
        Id:Id,
        companyType: values.companyType,
        companyName: values.companyName,
        websiteLink: values.websiteLink,
        about: values.about,
        location: values.location,
        email: values.email,
        image: imageUrl,
        numberOfEmployees: values.numberOfEmployees,
        year: values.year,
        services: services,
      };
      
    
      try {
        const response = await axios.post("/editcompanydata", body);

        console.log(response.data);
    
        if (response.data.status === true) {
          navigate("/admin/companylist");
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error("Error adding company data:", error);
        
      }
    }
    
  });
  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("profileImage", file);
    setSelectedFile(file);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[80%] p-20 ">
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Edit the Company details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="companyType"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Type
                </label>
                <div className="mt-2">
                  <div className="relative">
                    <select
                      id="companyType"
                      name="companyType"
                      autoComplete="company-type"
                      className="block appearance-none w-full bg-transparent border border-gray-300 py-1.5 pl-1 pr-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:leading-6"
                      defaultValue=""
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.companyType}
                    >
                      <option value="IT">IT Company</option>
                      <option value="Insurance">Insurance</option>
                    </select>
                    {formik.touched.email && formik.errors.companyType && (
                      <span className="text-red-500 text-sm">
                        {formik.errors.email}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.companyName}
                    />
                    {formik.touched.email && formik.errors.companyName && (
                      <span className="text-red-500 text-sm mt-2 mr-2">
                        {formik.errors.companyName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.about}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about company.
                </p>
                {formik.touched.email && formik.errors.about && (
                  <span className="text-red-500 text-sm mt-2 mr-2">
                    {formik.errors.about}
                  </span>
                )}
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <input
                          id="profileImage"
                          accept="image/*"
                          name="profileImage"
                          type="file"
                          onChange={handleImageChange}
                          error={
                            (formik.touched.image || formik.submitCount > 0) &&
                            Boolean(formik.errors.image)
                          }
                          helperText={
                            (formik.touched.image || formik.submitCount > 0) &&
                            formik.errors.image
                          }
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.profileImage &&
                          formik.errors.profileImage && (
                            <span className="text-red-500 text-sm mt-2 mr-2">
                              {formik.errors.profileImage}
                            </span>
                          )}
                      </label>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    {typeof selectedFile === "string" ? (
                     
                      <img
                        src={selectedFile}
                        alt="Selected Image"
                        className="mt-4 max-w-full"
                      />
                    ) : (
                      
                     
                      (
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected Image"
                          className="mt-4 max-w-full"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Website link
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="websiteLink"
                      id="websiteLink"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.websiteLink}
                    />
                    {formik.touched.email && formik.errors.websiteLink && (
                      <span className="text-red-500 text-sm mt-2 mr-2">
                        {formik.errors.websiteLink}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Company Information
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location}
                  />
                  {formik.touched.email && formik.errors.location && (
                    <span className="text-red-500 text-sm mt-2 mr-2">
                      {formik.errors.location}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-red-500 text-sm mt-2 mr-2">
                      {formik.errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  No.of employess
                </label>
                <div className="mt-2">
                  <select
                    id="numberOfEmployees"
                    name="numberOfEmployees"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.numberOfEmployees}
                  >
                    <option>0-10</option>
                    <option>10-50</option>
                    <option>50-200</option>
                  </select>
                  {formik.touched.email && formik.errors.numberOfEmployees && (
                    <span className="text-red-500 text-sm mt-2 mr-2">
                      {formik.errors.numberOfEmployees}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Year
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="year"
                    id="year"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.year}
                  />
                  {formik.touched.email && formik.errors.year && (
                    <span className="text-red-500 text-sm mt-2 mr-2">
                      {formik.errors.year}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Services
                </label>
                <div className="mt-2">
                  <input
                    id="service"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Add a service and press Enter"
                    value={currentService}
                    onChange={handleChange}
                    onKeyPress={handleAddService}
                  />
                  <div
                    id="services-input"
                    className="flex flex-wrap gap-1 mt-4"
                  >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="relative bg-gray-200 px-2 py-1 rounded-md "
                      >
                        <span className="bg-gray-200 px-2 py-1 rounded-md pr-4">
                          {service}
                        </span>
                        <button
                          type="button"
                          className="absolute top-2 right-0 rounded-full  text-black focus:outline-none"
                          onClick={() => handleRemoveService(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4 ml-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editdataform;
