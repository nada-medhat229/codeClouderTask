import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";

import { GetStepContent, getSteps } from "./steper";
import { Grid } from "@material-ui/core";
import "./step.css";
const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);
export default function Stepperes() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
 
 

  return (
  
    <Grid container>
      <Grid item xs={6} md={3} style={{backgroundColor:"#fff"}}>
        <div className="mx-4 mt-3">
          <h4>Supplier registration</h4>
          <p style={{ fontSize: "14px" }}>
            Get your account ready by finishing all the application forms.{" "}
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-between "
          style={{ height: "65%" }}
        >
          <Stepper activeStep={activeStep} orientation="vertical" style={{borderBottom:"2px solid #bdbdbd",marginLeft:"15px",paddingRight:"0px"}}>
            {steps.map((label, index) => (
              <Step key={index} style={{ marginTop: "-8px" }}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </Grid>
      <Grid item xs={6} md={9}>
        <Stepper activeStep={activeStep} orientation="vertical" className="py-0 ps-0">
          {steps.map((label, index) => (
            
            <StepContent key={index} >
              <Grid item xs={6} md={9} className="m-auto ">
              <Step key={index} className="d-flex align-items-center">
            
                <StepLabel  style={index !==0 ? {marginTop:"-250px"} : {}} className="p-2 d-flex align-items-center">
                  <div style={index ===2 ? {marginTop:"-350px"} : {}} >
                  <p className="d-inline-block p-1 mb-0 me-3 text-center"style={{color: "#000",width: "30px",height: "30px",borderRadius: "50%",border: "2px solid red",}}>
                  {index+1}
                  </p>
                  <h3 className="d-inline-block mb-0"style={{color:"#000"}}>
                  {label}
                  </h3>
                  </div>
                
                  </StepLabel>
              </Step>
                <div className="container px-5">{GetStepContent(index)}</div>
              </Grid>
            </StepContent>
          ))}
        </Stepper>
      </Grid>
      <div className="w-100 d-flex justify-content-between align-items-center mx-5"style={{height:"90px",marginTop:"-6rem"}}>
        <div className="w-25 d-flex align-items-center"><i className="fa-solid fa-lg fa-circle-question" style={{color:"#333858"}}></i> 
        <p className="p-2 mb-0">Do you have an issue?<br/> Get support</p>
        </div>
        <div className="w-75 d-flex justify-content-between align-items-center mx-5" >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            go back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
     
      

    </Grid>
  );
}
