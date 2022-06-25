import { useFormik } from "formik";
import "./step.css";
import * as Yup from "yup";
import { Box, Button, Modal, Typography } from "@material-ui/core";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import brand from "../assets/Group.png";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
//  validation schema
const validationSchema = Yup.object({
  crNumber: Yup.string().required(" your commercial number"),
  companyNameEnglish: Yup.string().required("your company Name English"),
  companyNameArabic: Yup.string().required(" your company Name Arabic"),
  companyMobileNumber: Yup.number().required(" your company Mobile Number"),
  companyLandlineNumber: Yup.number().required(" your company Landline Number"),
  Country: Yup.string().required(" your Country"),
  City: Yup.string().required(" your City"),
  District: Yup.string().required(" your District"),
  StreetName: Yup.string().required("your Street Name"),
  BuildingName: Yup.string().required(" your Building Name"),
  companyEmailAddress: Yup.string().required(
    "Please Enter your company Email Address"
  ),
});
export function getSteps() {
  return [
    // title side bar
    <b>General company information</b>,
    <b>Supplier Category</b>,
    <b>Products category</b>,
    <b>Banking information</b>,
    <b>Company profile</b>,
    <b>Documents</b>,
    <b>Submit</b>,
  ];
}
export function GetStepContent(step) {
  // formik validation
  const formik = useFormik({
    initialValues: {
      crNumber: "",
      companyNameEnglish: "",
      companyNameArabic: "",
      companyMobileNumber: "",
      companyLandlineNumber: "",
      Country: "",
      City: "",
      District: "",
      StreetName: "",
      BuildingName: "",
      companyEmailAddress: "",
      companyFaxNumber: "",
      Website: "",
    },
    onSubmit: (values) => {
      const data = {
        crNumber: values.crNumber,
        companyNameEnglish: values.companyNameEnglish,
        companyNameArabic: values.companyNameArabic,
        companyMobileNumber: values.companyMobileNumber,
        companyLandlineNumber: values.companyLandlineNumber,
        Country: values.Country,
        City: values.City,
        District: values.District,
        StreetName: values.StreetName,
        BuildingName: values.BuildingName,
        companyEmailAddress: values.companyEmailAddress,
        companyFaxNumber: values.companyFaxNumber,
        Website: values.Website,
      };
    },
    validationSchema,
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  switch (step) {
    case 0:
      return (
        // first step
        <div className="row justify-content-center align-items-center mb-3 pt-4">
          <h4>General Information</h4>
          <form onSubmit={formik.handleSubmit} className="">
            <div className="px-2">
              <label htmlFor="crNumber">CR Number</label>
              <input
                className="form-control mt-2"
                placeholder="please enter your commercial number"
                type="text"
                name="crNumber"
                {...formik.getFieldProps("crNumber")}
              />
              {formik.touched.crNumber && formik.errors.crNumber ? (
                <div className="errorForm text-danger">
                  {formik.errors.crNumber}
                </div>
              ) : null}
            </div>
            <div className="row justify-content-between w-100 my-4 m-auto">
              <div className="w-50">
                <label htmlFor="companyNameEnglish">
                  company Name (English)
                </label>
                <input
                  className="form-control mt-2"
                  placeholder="Golden Vision"
                  type="text"
                  name="companyNameEnglish"
                  {...formik.getFieldProps("companyNameEnglish")}
                />
                {formik.touched.companyNameEnglish &&
                formik.errors.companyNameEnglish ? (
                  <div className="errorForm text-danger">
                    {formik.errors.companyNameEnglish}
                  </div>
                ) : null}
              </div>

              <div className="w-50">
                <label htmlFor="companyNameArabic">company Name (Arabic)</label>
                <input
                  className="form-control mt-2"
                  placeholder="غولدن فيجين "
                  type="text"
                  name="companyNameArabic"
                  {...formik.getFieldProps("companyNameArabic")}
                />
                {formik.touched.companyNameArabic &&
                formik.errors.companyNameArabic ? (
                  <div className="errorForm text-danger">
                    {formik.errors.companyNameArabic}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row justify-content-between w-100 my-4 m-auto">
              <div className="w-50">
                <label htmlFor="companyMobileNumber">
                  company Mobile Number
                </label>
                <input
                  className="form-control mt-2"
                  placeholder="+966"
                  type="text"
                  name="companyMobileNumber"
                  {...formik.getFieldProps("companyMobileNumber")}
                />
                {formik.touched.companyMobileNumber &&
                formik.errors.companyMobileNumber ? (
                  <div className="errorForm text-danger">
                    {formik.errors.companyMobileNumber}
                  </div>
                ) : null}
              </div>

              <div className="w-50">
                <label htmlFor="companyLandlineNumber">
                  company Landline Number
                </label>
                <input
                  className="form-control mt-2"
                  placeholder="(011)2320011"
                  type="text"
                  name="companyLandlineNumber"
                  {...formik.getFieldProps("companyLandlineNumber")}
                />
                {formik.touched.companyLandlineNumber &&
                formik.errors.companyLandlineNumber ? (
                  <div className="errorForm text-danger">
                    {formik.errors.companyLandlineNumber}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row justify-content-between w-100 my-4 m-auto">
              <div className="w-75">
                <label htmlFor="Country">Country</label>
                <input
                  className="form-control mt-2"
                  placeholder="Saudia Arabia"
                  type="text"
                  name="Country"
                  disabled
                  {...formik.getFieldProps("Country")}
                />
                {formik.touched.Country && formik.errors.Country ? (
                  <div className="errorForm text-danger">
                    {formik.errors.Country}
                  </div>
                ) : null}
              </div>

              <div className="w-25">
                <label htmlFor="city">city</label>
                <input
                  className="form-control mt-2"
                  placeholder="Riyadh"
                  type="text"
                  name="City"
                  {...formik.getFieldProps("City")}
                />
                {formik.touched.City && formik.errors.City ? (
                  <div className="errorForm text-danger">
                    {formik.errors.City}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row justify-content-between w-100 my-4 m-auto">
              <div className="w-25">
                <label htmlFor="District">District</label>
                <input
                  className="form-control mt-2"
                  placeholder="District"
                  type="text"
                  name="District"
                  {...formik.getFieldProps("District")}
                />
                {formik.touched.District && formik.errors.District ? (
                  <div className="errorForm text-danger">
                    {formik.errors.District}
                  </div>
                ) : null}
              </div>

              <div className="w-25">
                <label htmlFor="StreetName">Street Name</label>
                <input
                  className="form-control mt-2"
                  placeholder="street Name"
                  type="text"
                  name="StreetName"
                  {...formik.getFieldProps("StreetName")}
                />
                {formik.touched.StreetName && formik.errors.StreetName ? (
                  <div className="errorForm text-danger">
                    {formik.errors.StreetName}
                  </div>
                ) : null}
              </div>
              <div className="w-25">
                <label htmlFor="BuildingName">Building Name</label>
                <input
                  className="form-control mt-2"
                  placeholder="BuildingName"
                  type="text"
                  name="BuildingName"
                  {...formik.getFieldProps("BuildingName")}
                />
                {formik.touched.BuildingName && formik.errors.BuildingName ? (
                  <div className="errorForm text-danger">
                    {formik.errors.BuildingName}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="px-2">
              <label htmlFor="companyEmailAddress">company Email Address</label>
              <input
                className="form-control mt-2"
                placeholder="example@gmail.com"
                type="email"
                name="companyEmailAddress"
                {...formik.getFieldProps("companyEmailAddress")}
              />
              {formik.touched.companyEmailAddress &&
              formik.errors.companyEmailAddress ? (
                <div className="errorForm text-danger">
                  {formik.errors.companyEmailAddress}
                </div>
              ) : null}
            </div>
            <div className="row justify-content-between w-100 my-4 m-auto">
              <div className="w-50">
                <label htmlFor="companyFaxNumber">
                  company Fax Number{" "}
                  <span style={{ opacity: 0.5 }}>(option)</span>
                </label>
                <input
                  className="form-control mt-2"
                  placeholder="Fax Number"
                  type="text"
                  name="companyFaxNumber"
                  {...formik.getFieldProps("companyFaxNumber")}
                />
              </div>
              <div className="w-50">
                <label htmlFor="Website">
                  {" "}
                  Website <span style={{ opacity: 0.5 }}>(option)</span>
                </label>
                <input
                  className="form-control mt-2"
                  placeholder="www.supplier.website.com"
                  type="text"
                  name="Website"
                  {...formik.getFieldProps("Website")}
                />
              </div>
            </div>
          </form>
        </div>
      );
    case 1:
      return (
        <>
          {/* second step */}
          <div
            className="row justify-content-center align-items-center "
            style={{ marginTop: "-80px" }}
          >
            <h4>Supplier Category</h4>
            <p>You can select multiple types</p>
            <div className="row justify-content-between align-items-center p-2">
              <div
                className="w-25 p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="checkbox" />
                text
              </div>
              <div
                className="w-25 p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="checkbox" />
                text
              </div>
              <div
                className="w-25 p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="checkbox" />
                text
              </div>
            </div>
            <div className="row justify-content-between align-items-center p-2">
              <div
                className="w-25 p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="checkbox" />
                text
              </div>
              <div
                className="w-25 p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="checkbox" />
                text
              </div>
              <div
                className="w-25 p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="checkbox" />
                text
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-3 pt-4">
            <h4>Supplier Sub-category </h4>
            <p>You can select single type</p>
            <div className="row justify-content-between align-items-center p-2">
              <div
                className="col-3 p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="radio" name="flexRadio" />
                text
              </div>
              <div
                className="col-3 p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="radio"  name="flexRadio" />
                text
              </div>
              <div
                className="col-3 p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="radio"  name="flexRadio" />
                text
              </div>
            </div>
            <div className="row justify-content-between align-items-center p-2">
              <div
                className="col-3  p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="radio"  name="flexRadio" />
                text
              </div>
              <div
                className="col-3  p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="radio"  name="flexRadio" />
                text
              </div>
              <div
                className="col-3 invisible p-2"
                style={{ height: "60px", border: "1px solid rgb(197 197 197)" }}
              >
                <input className="m-1" type="radio"  name="flexRadio"  />
                text
              </div>
              
            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          {/* third step */}
          <div
            className="row justify-content-between align-items-center border-bottom border-top py-4"
            style={{ marginTop: "-180px" }}
          >
            <div className="w-75">
              please select Brands
              <p className="mb-0">You can select multiple types</p>
            </div>
            <Button className="d-inline-block w-25" onClick={handleOpen}>
              Open modal
            </Button>
          </div>
          {/* pop up */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              style={{
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                position: "absolute",
                backgroundColor: "#fff",
                width: 700,
                border: "1px solid #000",
                boxShadow: 24,
                borderRadius: "10px",
              }}
            >
              <Typography
                id="modal-modal-title"
                className="p-3"
                style={{
                  color: "#fff",
                  backgroundColor: "#333758",
                  borderRadius: "9px 9px 0 0",
                }}
              >
                choose Brands
              </Typography>
              <div id="modal-modal-description " className="d-flex">
                <Search
                  className="w-75 m-3"
                  style={{ border: "1px solid #bdbdbd" }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search brand name, Category, Sub Category"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <p
                  className="m-3 me-0 text-center "
                  style={{
                    width: "40px",
                    border: "1px solid #bdbdbd",
                    borderRadius: "9px 0 0 9px",
                  }}
                >
                  <i className="fa-solid fa-angle-left p-3"></i>
                </p>
                <p
                  className="m-3 ms-0 text-center "
                  style={{
                    width: "40px",
                    border: "1px solid #bdbdbd",
                    borderRadius: "0 9px 9px 0",
                  }}
                >
                  <i className="fa-solid fa-angle-right p-3"></i>
                </p>
              </div>
              <div id="modal-modal-footer">
                <p className="ms-3">20 product out of 750</p>
                <div>
                  <div className="row justify-content-between m-auto">
                    <div
                      className="w-25 p-3 m-2 rounded text-center"
                      style={{ border: "1px solid #11AF22" }}
                    >
                      <img src={brand} alt="..." />
                    </div>
                    <div className="w-25 p-3 m-2 rounded text-center">
                      <img src={brand} alt="..." />
                    </div>
                    <div className="w-25 p-3 m-2 rounded text-center">
                      <img src={brand} alt="..." />
                    </div>
                  </div>
                  <div className="row justify-content-between m-auto">
                    <div className="w-25 p-3 m-2 rounded text-center">
                      <img src={brand} alt="..." />
                    </div>
                    <div className="w-25 p-3 m-2 rounded text-center">
                      <img src={brand} alt="..." />
                    </div>
                    <div className="w-25 p-3 m-2 rounded text-center">
                      <img src={brand} alt="..." />
                    </div>
                  </div>
                  <div className="row justify-content-between m-auto">
                    <div className="w-25 p-3 m-2 rounded text-center">
                      <img src={brand} alt="..." />
                    </div>
                    <div className="w-25 p-3 m-2 rounded text-center">
                      <img src={brand} alt="..." />
                    </div>
                    <div className="w-25 p-3 m-2 rounded text-center">
                      <img src={brand} alt="..." />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-between m-auto border-top p-2 mt-3 pt-3">
                <p className="w-50 fw-bolder mb-0" style={{ color: "#11AF22" }}>
                  Selected
                </p>
                <div className="w-50 text-end">
                  <Button className="border-1 " onClick={handleClose}>
                    {" "}
                    cancel
                  </Button>
                  <Button variant="contained" color="primary">
                    add
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
        </>
      );

    default:
      return "";
  }
}
