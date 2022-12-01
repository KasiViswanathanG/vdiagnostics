import React, { useEffect, useState } from "react";
import { IconButton, Stack, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/vdlogo.png";
import { ReactComponent as BackIcon } from "../../../assets/icons/backstepper.svg";
import Icon from "../../atoms/Icon";
import HorizontalLinearStepper from "../../molecules/Stepper";
import FlowTemplateFooter from "../../organisms/FlowTemplateFooter";
import AddPatientForm from "../../organisms/AddPatientForm";
import CovidRTPCR from "../../molecules/CovidRTPCR";
import PatientList from "../../organisms/PatientList";
import Selectlab from "../../organisms/SelectLab";
import {
  backText,
  stepsB,
  testBookingFlow,
  testCostAmt,
  covidTestCost,
  eReport,
  testCount,
  checkoutText,
} from "../../../assets/constants";
import { stepsA } from "../../molecules/CovidRTPCR";
import SelectAppointmentForm, {
  DateTimeType,
} from "../../organisms/SelectAppointmentForm";
import {
  getPatients,
  getPatientById,
  getAddress,
  getAddressById,
  postAddress,
  putPatient,
  postPatient,
  postAppointment,
} from "../../../services";
import SelectAddress from "../../organisms/SelectAddressOrganism";
import OrderPlaced from "../../molecules/OrderPlaced";
import Payment from "../../organisms/Payment";
import CheckoutDetail, {
  PatientDetailsProps,
} from "../../organisms/CheckoutDetail";
import { ReactComponent as altos } from "../../../assets/icons/altos.svg";
import TrackYourOrder from "../../organisms/TrackYourOrder";
import { PatientProps } from "../../molecules/Receipt";
import {
  discountFunc,
  getCurrentDate,
  getTest,
} from "../../../assets/constants/util";
import AddressForm from "../../organisms/Addressform";
import { useSelector } from "react-redux";

const StackPage = styled(Stack)({
  flexDirection: "column",
  flexWrap: "nowrap",
});

const ImageLogo = styled(Stack)({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.25em",
});

const StackContainer = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2em",
  padding: "1.5em 5.9375em",
});

const Content = styled(Stack)({
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2em",
  width: "100%",
});

const BackStepperContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

const StackHorizontalLinearStepper = styled(Stack)({
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "-75px",
});

const Back = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "1em",
});

const BackIconButton = styled(IconButton)({
  padding: "0",
});

const Text = styled(Typography)({
  color: "#6B4DE0",
});

const TestContent = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
});

const CheckoutBox = styled(Box)({
  marginRight: "70%",
});

const FooterDiv = styled("div")({
  position: "fixed",
  bottom: "0",
  width: "100%",
});

type patientType = {
  relation: string;
  name: string;
  dob: string;
  gender: string;
  id: number;
};
type Rev = {
  labName: string;
  testPrice: string;
  totalTestPrice: string;
};

type addressGetType = {
  houseNum: string;
  area: string;
  zipcode: string;
  cityState: string;
  id: number;
};

const TestBookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUserId: any = location.state;
  const [currentUser] = useState<number>(currentUserId);

  const [activeStep, setActiveStep] = useState<number>(1);
  const [stepperSteps, setStepperSteps] = useState<string[]>(stepsA);
  const [flowUI, setFlowUI] = useState<number>(0);
  const [testBookingDetails, setTestBookingDetails] = useState<number>(0);
  const [flowButtonText, setFlowButtonText] = useState<string>(
    testBookingFlow[0]
  );
  const [patientDetails, setPatientDetails] = useState<patientType[]>([
    {
      relation: "",
      name: "",
      dob: "",
      gender: "",
      id: 0,
    },
  ]);
  const [lab, setLab] = useState<Rev>({
    labName: "",
    testPrice: "",
    totalTestPrice: "",
  });
  const [dateTime, setDateTime] = useState<DateTimeType>({
    month: "January",
    date: 1,
    day: "Monday",
    time: "6.00am - 7.00am",
  });
  const [appointmentTime, setAppointmentTime] = useState<string>("");
  const [selPatients, setSelPatients] = useState<number>(0);
  const [testPatients, setTestPatients] = useState<patientType[]>([
    {
      relation: "",
      name: "",
      dob: "",
      gender: "",
      id: 0,
    },
  ]);
  const [editPatient, setEditPatient] = useState<string>("0");
  const [addressList, setAddressList] = useState<addressGetType[]>([
    {
      houseNum: "",
      area: "",
      zipcode: "",
      cityState: "",
      id: 0,
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState<addressGetType>({
    houseNum: "",
    area: "",
    zipcode: "",
    cityState: "",
    id: 0,
  });
  const [checkoutPatients, setCheckoutPatients] = useState<
    PatientDetailsProps[]
  >([]);

  //Address Form
  const [houseno, setHouseno] = useState<string>("");
  const [road, setRoad] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHouseno(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoad(event.target.value);
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipcode(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  //Patient Form
  const [relation, setRelation] = useState<string>("myself");
  const [name, setName] = useState<string>("");
  const [dob, setDOB] = useState<string>(getCurrentDate());
  const [gender, setGender] = useState<string>("");
  const [saveDetails, setSaveDetails] = useState<boolean>(true);

  const handleTabClick = (_event: React.SyntheticEvent, newValue: string) => {
    setRelation(newValue);
  };

  const handleNamesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDatesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDOB(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleCheckbox = () => {
    setSaveDetails((prevState: boolean) => {
      return prevState ? false : true;
    });
  };
  //

  const getCurrentYear = () => {
    const current = new Date();
    return current.getFullYear();
  };

  const getAge = (dob1: string) => {
    return (getCurrentYear() - parseInt(dob1.substring(0, 4))).toString();
  };

  const [trackPatients, setTrackPatients] = useState<PatientProps[]>([]);

  useEffect(() => {
    if (flowUI === 2) {
      const patientData = getPatients();
      const getPatientDetails = async () => {
        const allPatients = await patientData;
        const userPatients = [];
        // eslint-disable-next-line prefer-const
        for (let i of allPatients) {
          if (i.userId === currentUser) {
            userPatients.push(i);
          }
        }

        setPatientDetails(userPatients);
      };
      getPatientDetails();
    }
    if (flowUI === 4) {
      setAppointmentTime(
        `${dateTime.month} ${dateTime.date}, ${dateTime.day}, ${dateTime.time}`
      );
    }
    if (flowUI === 6) {
      const addressData = getAddress();
      const getAddressDetails = async () => {
        const allAdds = await addressData;
        const userAdds = [];
        // eslint-disable-next-line prefer-const
        for (let i of allAdds) {
          if (i.userId === currentUser) {
            userAdds.push(i);
          }
        }

        setAddressList(userAdds);
      };
      getAddressDetails();
    }
    // eslint-disable-next-line
  }, [flowUI, dateTime, appointmentTime, flowButtonText]);

  const thisTestId = useSelector((state: any) => state.test.thisTestId);
  useEffect(() => {
    setCheckoutPatients(() => {
      const patientsList: PatientDetailsProps[] = [];
      let i = 0;
      if (testPatients[0].name === "") {
        i = 1;
      }
      for (; i < testPatients.length; i++) {
        const patient = {
          name: testPatients[i].name,
          tests: [getTest(thisTestId)!],
          testCount: testCount,
          eReport: eReport,
          testFor:
            testPatients[i].relation.substring(0, 1).toUpperCase() +
            testPatients[i].relation.substring(1),
          gender: testPatients[i].gender.substring(0, 1).toUpperCase(),
          age: parseInt(getAge(testPatients[i].dob)),
          cost: covidTestCost,
        };
        patientsList.push(patient);
      }
      return patientsList;
    });
    setTrackPatients(() => {
      const patientsList: PatientProps[] = [];
      let i = 0;
      if (testPatients[0].name === "") {
        i = 1;
      }
      for (; i < testPatients.length; i++) {
        const patient = {
          name: testPatients[i].name,
          tests: [getTest(thisTestId)!],
        };
        patientsList.push(patient);
      }
      return patientsList;
    });
    const textContentStack = document.getElementById(
      "textContent"
    ) as HTMLElement;
    if (flowUI === 7) {
      textContentStack.style.margin = "0";
      textContentStack.style.width = "100%";
    }
    // eslint-disable-next-line
  }, [flowUI === 7]);

  useEffect(() => {
    if (editPatient !== "0") {
      const patientData = getPatientById(editPatient);
      const getPatientDetailsById = async () => {
        const { relation, name, dob, gender } = await patientData;
        setRelation(relation);
        setName(name);
        setDOB(dob);
        setGender(gender);
      };
      getPatientDetailsById();
    }
    // eslint-disable-next-line
  }, [flowUI === 1]);

  const goHome = () => {
    navigate("/");
  };

  const processForward = (prevStateIndex: number) => {
    setFlowUI(flowUI + 1);
    flowUI !== 1 && flowUI !== 5 && setActiveStep(activeStep + 1);
    if (flowUI === 2) {
      setActiveStep(0);
      setStepperSteps(stepsB);
    }
    setTestBookingDetails(prevStateIndex);
  };

  const processBackward = (prevStateIndex: number) => {
    setFlowUI(flowUI - 1);
    flowUI !== 2 && flowUI !== 6 && setActiveStep(activeStep - 1);
    if (flowUI === 3) {
      setActiveStep(2);
      setStepperSteps(stepsA);
    }

    setTestBookingDetails(prevStateIndex);
  };

  const handleFlowClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    flowUI >= 10 && goHome();

    setFlowButtonText((prevState: string) => {
      const prevStateIndex = testBookingFlow.indexOf(prevState);
      processForward(prevStateIndex);
      return testBookingFlow[prevStateIndex + 1];
    });

    if (flowButtonText === testBookingFlow[1]) {
      const handlePatientSubmit = async () => {
        const newPatient = {
          relation: relation,
          name: name,
          dob: dob,
          gender: gender,
          userId: currentUser,
        };

        if (name.length !== 0 && gender.length !== 0) {
          if (editPatient !== "0") {
            await putPatient(editPatient, newPatient);
          } else {
            saveDetails && (await postPatient(newPatient));
          }
          setEditPatient("0");
          setRelation("myself");
          setName("");
          setDOB(getCurrentDate());
          setGender("");
        }
      };
      handlePatientSubmit();
    }

    if (flowButtonText === testBookingFlow[8]) {
      const handleAppointmentSubmit = () => {
        let tps = [];
        for (let tp of testPatients) {
          if (tp.id !== 0) tps.push(tp.id);
        }
        const newAppointment = {
          month: dateTime.month,
          date: dateTime.date,
          day: dateTime.day,
          time: dateTime.time,
          patients: tps,
          testId: thisTestId,
          labId: 1,
          addressId: selectedAddress.id,
          userId: currentUser,
        };
        postAppointment(newAppointment);
      };
      handleAppointmentSubmit();
    }

    if (flowButtonText === "Save Address") {
      const handleOnSubmit = async () => {
        const newAddress = {
          houseNum: houseno,
          area: road,
          zipcode: zipcode,
          cityState: city,
          userId: currentUser,
        };
        // eslint-disable-next-line eqeqeq
        if (houseno != "" && zipcode != "" && road != "" && city != "") {
          await postAddress(newAddress);
        }
      };
      handleOnSubmit();
    }
  };

  const handleBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    flowUI === 0 && navigate("/");

    if (flowUI <= 3) {
      setSelPatients(0);
      setTestPatients([]);
    }

    setFlowButtonText((prevState: string) => {
      const prevStateIndex = testBookingFlow.indexOf(prevState);
      processBackward(prevStateIndex - 2);
      return testBookingFlow[prevStateIndex - 1];
    });
  };

  const selectPatients = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const patientId = event.target.value;
      const patientData = getPatientById(patientId);
      let selectedPatient: patientType = {
        relation: "",
        name: "",
        dob: "",
        gender: "",
        id: 0,
      };

      const getPatientDetailsById = async () => {
        selectedPatient = await patientData;

        setTestPatients((prevSelectedPatients: patientType[]) => {
          const newList: patientType[] = [...prevSelectedPatients];
          newList.push(selectedPatient);
          return newList;
        });
      };
      getPatientDetailsById();

      setSelPatients(selPatients + 1);
    } else {
      const unSelectedId: number = parseInt(event.target.value);
      const updatedList = testPatients.filter((eachPatient: patientType) => {
        return eachPatient.id !== unSelectedId;
      });
      setTestPatients(updatedList);

      selPatients > 0 && setSelPatients(selPatients - 1);
    }
  };

  const updatePatient = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleBackClick(event);
    const patientId = (event.target as HTMLInputElement).value;
    setEditPatient(patientId);
  };

  const changeRadioValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const idselectedAddress = getAddressById(event.target.value);
    const setAddressSelect = async () => {
      const addressSelected = await idselectedAddress;
      setSelectedAddress(addressSelected);
    };
    setAddressSelect();
    return idselectedAddress;
  };

  const handleTimeChange = () => {
    setActiveStep(1);
    setTestBookingDetails(3);
    setFlowUI(4);
    setFlowButtonText(testBookingFlow[4]);
  };

  const handleAddressChange = () => {
    setActiveStep(2);
    setFlowUI(6);
    setFlowButtonText(testBookingFlow[6]);
  };

  const discountAmt = discountFunc(checkoutPatients.length);
  const checkoutDetailComp = (
    <CheckoutDetail
      labIcon={altos}
      lab={lab.labName}
      itemTotalVal={testCostAmt * checkoutPatients.length}
      discountVal={discountAmt}
      grandTotalVal={testCostAmt * checkoutPatients.length - discountAmt}
      noOfPatients={checkoutPatients.length}
      patients={checkoutPatients}
      date={`${dateTime.day.substring(0, 3)}, ${dateTime.month.substring(
        0,
        3
      )} ${dateTime.date}, ${getCurrentYear()}`}
      time={dateTime.time}
      timeChange={handleTimeChange}
      addressType={"Home"}
      address={`${selectedAddress.houseNum} ${selectedAddress.area} ${selectedAddress.cityState} - ${selectedAddress.zipcode}`}
      addressChange={handleAddressChange}
    />
  );
  return (
    <StackPage>
      <StackContainer>
        <ImageLogo>
          <img
            src={logo}
            alt="logo"
            style={{ height: "25px", width: "25px" }}
          />
          <Typography color="primary.dark" sx={{ marginLeft: "0.5em" }}>
            VDiagnostics
          </Typography>
        </ImageLogo>
        <Content>
          {flowUI <= 8 && (
            <BackStepperContainer>
              <Back>
                <BackIconButton
                  onClick={handleBackClick}
                  data-testid="back-flow-btn"
                >
                  <Icon component={BackIcon} sx={{ fill: "none" }} />
                </BackIconButton>
                <Text variant="bodyMedium">{backText}</Text>
              </Back>
              {flowUI <= 7 && (
                <StackHorizontalLinearStepper>
                  <HorizontalLinearStepper
                    steps={stepperSteps}
                    activeStep={activeStep}
                  />
                </StackHorizontalLinearStepper>
              )}
              {flowUI === 8 && (
                <CheckoutBox>
                  <Typography variant="subtitle1">{checkoutText}</Typography>
                </CheckoutBox>
              )}
              <Box />
            </BackStepperContainer>
          )}
          <TestContent id="textContent">
            {flowUI === 0 && <CovidRTPCR />}
            {flowUI === 1 && (
              <AddPatientForm
                handleTabClick={handleTabClick}
                handleNamesChange={handleNamesChange}
                handleDatesChange={handleDatesChange}
                handleGenderChange={handleGenderChange}
                handleCheckbox={handleCheckbox}
                relation={relation}
                name={name}
                dob={dob}
                gender={gender}
                saveDetails={saveDetails}
              />
            )}
            {flowUI === 2 && (
              <PatientList
                data-testid="new-patient-click"
                handleNewClick={() => {
                  setFlowUI(1);
                  setTestBookingDetails(0);
                  setEditPatient("0");
                  setFlowButtonText(testBookingFlow[1]);
                }}
                list={patientDetails}
                handleCheckBoxChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => selectPatients(event)}
                handleEditClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  updatePatient(event)
                }
              />
            )}
            {flowUI === 3 && (
              <Selectlab data-testid="new-select-lab" setLab={setLab} />
            )}
            {flowUI === 4 && (
              <SelectAppointmentForm
                setDateTime={setDateTime}
                month={dateTime.month}
                date={dateTime.date}
                day={dateTime.day}
                time={dateTime.time}
              />
            )}
            {flowUI === 5 && (
              <AddressForm
                handleCardNumberChange={handleCardNumberChange}
                handleCvvChange={handleCvvChange}
                handleDateChange={handleDateChange}
                handleNameChange={handleNameChange}
              />
            )}
            {flowUI === 6 && (
              <SelectAddress
                addressList={addressList}
                handleNewClick={() => {
                  setFlowUI(5);
                  setFlowButtonText(testBookingFlow[5]);
                }}
                handleRadioChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => {
                  changeRadioValue(event);
                }}
              />
            )}
            {flowUI === 7 && (
              <CheckoutDetail
                labIcon={altos}
                lab={lab.labName}
                itemTotalVal={testCostAmt * checkoutPatients.length}
                discountVal={discountAmt}
                grandTotalVal={
                  testCostAmt * checkoutPatients.length - discountAmt
                }
                noOfPatients={checkoutPatients.length}
                patients={checkoutPatients}
                date={`${dateTime.day.substring(
                  0,
                  3
                )}, ${dateTime.month.substring(0, 3)} ${
                  dateTime.date
                }, ${getCurrentYear()}`}
                time={dateTime.time}
                timeChange={handleTimeChange}
                addressType={"Home"}
                address={`${selectedAddress.houseNum} ${selectedAddress.area} ${selectedAddress.cityState} - ${selectedAddress.zipcode}`}
                addressChange={handleAddressChange}
              />
            )}
            {flowUI === 8 && (
              <Payment currentUserId={currentUser}>
                {checkoutDetailComp}
              </Payment>
            )}
            {flowUI === 9 && <OrderPlaced />}
            {flowUI === 10 && (
              <TrackYourOrder
                patients={trackPatients}
                address={`${selectedAddress.houseNum} ${selectedAddress.area} ${selectedAddress.cityState} - ${selectedAddress.zipcode}`}
                total={testCostAmt * checkoutPatients.length - discountAmt}
              />
            )}
          </TestContent>
        </Content>
      </StackContainer>
      <FooterDiv>
        <FlowTemplateFooter
          testBookingDetails={testBookingDetails}
          flowButtonText={flowButtonText}
          handleFlowClick={handleFlowClick}
          selPatients={selPatients}
          labName={lab.labName}
          testPrice={lab.testPrice}
          totalTestsForPrice={lab.totalTestPrice}
          appointmentTime={appointmentTime}
          data-testid="flow-btn"
        />
      </FooterDiv>
    </StackPage>
  );
};

export default TestBookingPage;
