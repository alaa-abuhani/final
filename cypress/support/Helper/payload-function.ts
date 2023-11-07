export let employess: any[] = [];
let firstName;
let id: any;
let lastName: any;
export const employeeData = (): any => {
  // export const employeeData = (): any => {
  firstName = "alaaa" + Math.round(10000 * Math.random());
  id = "15" + Math.round(100 * Math.random());
  lastName = "abuhani" + Math.round(10000 * Math.random());
  employess.push(firstName);
  let employee: any = {
    empPicture: null,
    employeeId: id,
    firstName: firstName,
    lastName: lastName,
    middleName: "",
  };
  return employee;
};

export const jobData = (jobTitle: any): any => {
  let job: any = {
    title: jobTitle,
    description: "",
    specification: null,
    note: "",
  };
  return job;
};
export const jobAndLocationEmployeeData = (jobId: any, locId: any): any => {
  let jobAndLocation: any = {
    joinedDate: null,
    jobTitleId: jobId,
    locationId: locId,
  };
  return jobAndLocation;
};
export const locationData = (locationName: any, countryCode: any): any => {
  let location: any = {
    name: locationName,
    countryCode: countryCode,
    province: "",
    city: "",
    address: "",
    zipCode: "",
    phone: "",
    fax: "",
    note: "",
  };
  return location;
};
export const salaryEmployeeData = (
  salaryComponent: any,
  salaryAmount: any,
  currencyId: string
): any => {
  let salary: any = {
    salaryComponent: "5000",
    salaryAmount: "6000",
    currencyId: "JOD",
    comment: null,
    addDirectDeposit: false,
  };
  return salary;
};
