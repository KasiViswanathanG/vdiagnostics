import { ReactComponent as location } from "../icons/map-pin-1.svg";
import { ReactComponent as doctor } from "../icons/users.svg";
import { ReactComponent as torch } from "../icons/credit-card.svg";
import { ReactComponent as home } from "../icons/home.svg";
import { ReactComponent as offer } from "../icons/offer.svg";
import { ReactComponent as help } from "../icons/help-circle.svg";
import { ReactComponent as terms } from "../icons/file-text-1.svg";

export const baseUrl = "https://myteamates.gq/";
export const bannerHeading = "60% off on your first order";
export const bannerCaption = "Your health is our priority";

export const footerLogo = "VDiagnostics";
export const footerItems: string[] = [
  "Home",
  "Contact us",
  "Privacy policy",
  "Terms & conditions",
];

export const bannerButtonText = "Book now";

export const testPriceText = "Starting from $";
export const testTimeText = "Reports ready in";
export const testTotalText = "tests";
export const viewDetailText = " View Details";

export const formHeading = "Add Patient Details";
export const fieldRelation = "Booking for whom";
export const fieldName = "Name";
export const fieldDOB = "Date of Birth";
export const fieldGender = "Gender";
export const fieldAddPatient = "Save Patient";

export const patientInfoName = "Patrick Smith";
export const patientInfoDetails = "Self, Male, 30 years";
export const patientInfoEdit = "Edit";

export const relationLabels: {
  myself: string;
  mother: string;
  father: string;
  son: string;
  daughter: string;
  others: string;
} = {
  myself: "Myself",
  mother: "Mother",
  father: "Father",
  son: "Son",
  daughter: "Daughter",
  others: "Others",
};

export const genderLabels: {
  male: string;
  female: string;
  otherGender: string;
} = {
  male: "Male",
  female: "Female",
  otherGender: "Others",
};

export const detailsSave = "Save details for future";

export const cancelText = "Cancel";

export const testBookingFlow: string[] = [
  "Add Patient",
  "Next",
  "Select Lab",
  "Select Date & Time",
  "Add Address",
  "Save Address",
  "Complete Order",
  "Continue",
  "Pay Now",
  "Track Your Order",
  "Back to Home",
];

export const testBookingDetailsText: {
  patientSelected1: string;
  patientSelected2: string;
  labName: string;
  testPrice: string;
  totalTestsForPrice: string;
  testDateTime: string;
  homeButtonText: string;
} = {
  patientSelected1: "Patients Selected",
  patientSelected2: "Patient Selected",
  labName: "Los Altos Center Lab",
  testPrice: "$1200",
  totalTestsForPrice: "for 1 Test",
  testDateTime: "Wed 23, 7.00am - 8.00am",
  homeButtonText: "Back to Home",
};

export const noOfTests = "1600+ Tests";
export const noOfHomes = "At Home Services";
export const certified = "Certified Professionals";
export const clia = "CLIA Certified Labs";
export const reports = "Reports in 24 - 48 Hours";
export const safe = "Safe and Hygenic";

export const trackPlacedOrder = "Track your order";
export const trackPlaced = "Order placed";
export const trackLab = "Lab technician assigned";
export const trackSample = "Sample collection";
export const trackExamined = "Sample being examined";
export const trackReport = "Report ready";

export const trackPlacedText = "Placed on Mon, 22 Feb, 11.00 AM";
export const trackLabText = "Esther Howard";
export const trackSampleText = "On Tue, 23 Feb, 7.00 - 8.00 AM";
export const trackExamText = "Estimated time - 24 hrs";

export const testBoxText = "Full body Check";
export const testCovidText = "Covid RTPCR";
export const testLiverText = "Liver Function Test";
export const testBloodText = "Complete Blood Count";
export const testDiabetesText = "Diabetes Test";
export const testKidneyText = "Kidney Function Test";
export const testThyroidText = "Thyroid Test";
export const testLipidText = "Lipid Profile";

export const testInfoHome = "Home visit";
export const testInfoTorch = "1 test included";
export const testInfoConsultation = "Free Consultation";
export const testInfoReports = "Online reports";

export const itemTotal = "Item Total";
export const discount = "Discount";
export const grandTotal = "Grand Total";
export const patientDetails = "Patient Details";
export const timeSlotSelected = "Time Slot Selected";
export const addressSelected = "Address Selected ";
export const change = "Change";
export const leftBraces = "(";
export const rightBraces = ")";
export const dollarSign = "$";
export const dollarSignNeg = "-$";
export const testCostAmt = 1200;
export const discountAmt = 100;

export const addCardHeading = "Add New Card";
export const addCardNumber = "Card Number";
export const addCardNumberPlaceHolder = "1244 1234 1345 3255";
export const addCardExpiry = "Expiry Date";
export const addCardExpiryPlaceHolder = "02/25";
export const addCardCvv = "CVV";
export const addCardCvvPlaceHolder = "114";
export const addCardHolder = "Card Holder Name";
export const addCardPlaceHolder = "Yessie";
export const addCardLabel = "Save Card";
export const addCardButton = "Add Card";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const daysFullForm = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const time6To12 = "06 AM - 12 PM";
export const timeRange6To12 = [
  "06.00 - 07.00",
  "07.00 - 08.00",
  "08.00 - 09.00",
  "09.00 - 10.00",
  "10.00 - 11.00",
  "11.00 - 12.00",
];

export const time12To4 = "12 PM - 04 PM";
export const timeRange12To4 = [
  "12.00 - 01.00",
  "01.00 - 02.00",
  "02.00 - 03.00",
  "03.00 - 04.00",
];

export const time4To6 = "04 PM - 06 PM";
export const timeRange4To6 = ["04.00 - 05.00", "05.00 - 06.00"];

export const timeWithAmPm = [
  "06.00am - 07.00am",
  "07.00am - 08.00am",
  "08.00am - 09.00am",
  "09.00am - 10.00am",
  "10.00am - 11.00am",
  "11.00am - 12.00pm",
  "12.00pm - 01.00pm",
  "01.00pm - 02.00pm",
  "02.00pm - 03.00pm",
  "03.00pm - 04.00pm",
  "04.00pm - 05.00pm",
  "05.00pm - 06.00pm",
];

export const selectAppointment = "Select Appointment";

export const cardHolderHeading = "Card Holder";
export const expiresHeading = "Expires";

export const orderPlaced = "Your order has been placed";
export const instructionsHeading = "Instructions";
export const instructions =
  "Please don't eat or drink anything other than water for 8 -10 hours prior to the appointment.";

export const totalAmountToPay = "Total Amount Paid - $";

export const TestCostTimeDetails = { price: 1200, time: "24 Hours" };

export const CovidRTPCRInfo = [
  "Disclaimer 1:For travelling purposes, please ensure the name is as per govt ID proof.",
  "Disclaimer 2: Vaccination status will be required and Covid Positive Reports will be made available as per local ",
  "Municipal corporation guidelines.",
];

export const packageBenefits = {
  packHeading: "Why you should book this package?",
  packItems: [
    "To check if you have an active COVID-19 infection",
    "If you are showing symptoms of COVID-19 infection",
    "If you had a contact with someone with confirmed COVID-19",
  ],
};

export const covidTestHeading = "Covid RTPCR Test";

export const orgName = "Zemoso Diagnostics";
export const backText = "Back";
export const stepsB = [
  "Lab test",
  "Select appointment",
  "Add address",
  "Review order",
];

export const labCardName = "Los Altos Center Lab";
export const labstars = "4.3";
export const labslots = "4 Slots Available";
export const labtime = "Reports ready in 24 hrs";
export const labprice = "$1200 for 1 Test";
export const labAddtest = "Add Test";
export const labSelect = "Select lab";
export const labsort = "Sort";

export const addressAdd = "Add Address";
export const addressHouseno = "House/ Flat/ Block No.";
export const addressRoad = "Road / Area";
export const addressZipcode = "Zipcode";
export const addressCity = "City, State";
export const addressButtonText = "Add Address";

export const covidTest = "COVID RT-PCR Test";
export const testCount = "1 Test";
export const eReport = "E-Reports by 12hrs";
export const covidTestCost = "$1200";

export const checkoutText = "Check out";

export const Item10 = "Track My Orders";
export const Item11 = "Track your recent orders & see order status";
export const Item20 = "My Family & Friends";
export const Item21 = "Manage & view family members & reports";
export const Item30 = "Payments";
export const Item31 = "Payment modes & refund status";
export const Item40 = "Manage Address";
export const Item41 = "2235 California Street Mountain View Cali...";
export const Item50 = "Offers";
export const Item51 = "See offers for more details";
export const Item60 = "Help";
export const Item61 = "FAQ’s & general queries";
export const Item70 = "Terms conditions";

export const userName = "Patrick Smith";
export const userEmail = "patricksmith@gmail.com";
export const userNumber = "+1 330-617-3324";
export const logoutcontent = "Logout";

export const logoutItems = [
  {
    component: location,
    content1: Item10,
    content2: Item11,
  },
  {
    component: doctor,
    content1: Item20,
    content2: Item21,
  },
  {
    component: torch,
    content1: Item30,
    content2: Item31,
  },
  {
    component: home,
    content1: Item40,
    content2: Item41,
  },
  {
    component: offer,
    content1: Item50,
    content2: Item51,
  },
  {
    component: help,
    content1: Item60,
    content2: Item61,
  },
  {
    component: terms,
    content1: Item70,
  },
];
export const searchText = "Search for lab test, packages";
export const CommonlyBookedTest = "Book Your Test";
export const Seemore = "See more";

export const FullbodyCheck = "Full body Check";
export const CovidRTPCR = "Covid RTPCR";
export const LiverFunctionTest = "Liver Function Test";
export const CompleteBloodCount = "Complete Blood Count";
export const DiabetesTest = "Diabetes Test";
export const KidneyFunctionTest = "Kidney Function Test";
export const ThyroidTest = "Thyroid Test";
export const LipidProfile = "Lipid Profile";

export const WhyChooseUs = "Why Choose Us";

export const ChooseTest = "Acclaimed Tests";

export const FAQ = "Frequently Asked Questions";

export const CustomerTestimonials = "Customer Testimonials";

export const fullBodyCheckup = "Full body checkup";
export const CardiacRiskAssessment = "Cardiac Risk Assessment";
export const StressAssessment = "Stress Assessment";

export const num1299 = 1299;
export const time24 = "24 Hrs";
export const num42 = 42;

export const faqLable1 = "How soon can i get the report?";
export const faqContent1 = "Very Soon";
export const faqLable2 = "Who needs Full Body Check-up?";
export const faqContent2 = "YOU";
export const faqLable3 = "Can children can take this test?";
export const faqContent3 = "YES";
export const faqLable4 =
  "How many persons can book appointment through one account?";
export const faqContent4 = "Unlimited";

export const Abby = "Abby";
export const SanJoseCA = "San Jose, CA";
export const review1 =
  "“Very friendly and professional. Loved the follow-up and progress calls”";
export const review2 =
  "“Very friendly and professional. Loved the follow-up and progress calls. I would like to suggest Zemoso diagnostics to my friends and family.”";
