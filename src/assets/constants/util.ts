import {
  days,
  daysFullForm,
  timeRange12To4,
  timeRange4To6,
  timeRange6To12,
} from ".";

export const daysOfDateFunc = () => {
  let daysOfDate: Record<number, string> = {};
  for (let i = 1; i < 366; i++) {
    let pair = { [i]: days[i % 7] };
    daysOfDate = { ...daysOfDate, ...pair };
  }
  return daysOfDate;
};

export const weekDaysFunc = () => {
  let weekDays: Record<number, string> = {};
  for (let i = 1; i < 366; i++) {
    let fullPair = { [i]: daysFullForm[i % 7] };
    weekDays = { ...weekDays, ...fullPair };
  }
  return weekDays;
};

export const timeCoversion = (chosenTime: string) => {
  for (let i = 0; i < timeRange6To12.length; i++) {
    if (timeRange6To12[i].substring(0, 2) === chosenTime.substring(0, 2)) {
      return timeRange6To12[i];
    }
  }
  for (let i = 0; i < timeRange12To4.length; i++) {
    if (timeRange12To4[i].substring(0, 2) === chosenTime.substring(0, 2)) {
      return timeRange12To4[i];
    }
  }
  for (let i = 0; i < timeRange4To6.length; i++) {
    if (timeRange4To6[i].substring(0, 2) === chosenTime.substring(0, 2)) {
      return timeRange4To6[i];
    }
  }
  return chosenTime;
};

export const discountFunc = (length: number) => {
  return length === 0 ? 0 : 100;
};

export const getCurrentDate = () => {
  const current = new Date();
  const yyyy: number = current.getFullYear();
  const mm: number = current.getMonth() + 1;
  const dd: number = current.getDate();
  let mmStr: string = mm.toString();
  let ddStr: string = dd.toString();

  if (mm < 10) {
    mmStr = "0" + mmStr;
  }

  if (dd < 10) {
    ddStr = "0" + ddStr;
  }

  return `${yyyy}-${mmStr}-${ddStr}`;
};

export const getTest = (testId: number) => {
  if (testId === 1) {
    return "Full body Check";
  } else if (testId === 2) {
    return "Covid RTPCR";
  } else if (testId === 3) {
    return "Liver Function Test";
  } else if (testId === 4) {
    return "Complete Blood Count";
  } else if (testId === 5) {
    return "Diabetes Test";
  } else if (testId === 6) {
    return "Kidney Function Test";
  } else if (testId === 7) {
    return "Thyroid Test";
  } else if (testId === 8) {
    return "Lipid Profile";
  }
};
