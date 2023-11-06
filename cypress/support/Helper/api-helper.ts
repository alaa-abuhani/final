import {
  employeeData,
  jobAndLocationEmployeeData,
  jobData,
  locationData,
  salaryEmployeeData,
} from "./payload-function";

const baseUrl = Cypress.config().baseUrl;
export const URLs: any = {
  employee: `${baseUrl}/api/v2/pim/employees`,
  job: `${baseUrl}/api/v2/admin/job-titles`,
  location: `${baseUrl}/api/v2/admin/locations`,
  jobDetails: `${baseUrl}/api/v2/admin/locations/`,
};
export const addJob = (title: any) => {
  return cy
    .request({
      method: "POST",
      url: URLs.job,
      body: jobData(),
    })
    .then((res) => res.body.data.id);
};

export const addLocation = (name: any) => {
  return cy
    .request({
      method: "POST",
      url: URLs.location,
      body: locationData(),
    })
    .then((res) => res.body.data.id);
};

export const addEmloyee = () => {
  return cy
    .request({
      method: "POST",
      url: URLs.employee,
      body: employeeData(),
    })
    .then((response) => response.body.data.empNumber);
};

export const addJobAndLocationEmployee = (
  idjob: any,
  idloc: any,
  empNumber: any
) => {
  cy.request({
    method: "PUT",
    url: `${baseUrl}/api/v2/pim/employees/${empNumber}/job-details`,
    body: jobAndLocationEmployeeData(),
  });
};

export const addSalaryEmployee = (empNumber: any) => {
  cy.request({
    method: "Post",
    url: `${baseUrl}/api/v2/pim/employees/${empNumber}/salary-components`,
    body: salaryEmployeeData(),
  });
};
