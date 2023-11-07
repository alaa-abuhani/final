import {
  addEmployee,
  addJob,
  addJobAndLocationEmployee,
  addLocation,
  addSalaryEmployee,
} from "../../support/Helper/api-helper";
import { employess, jobTitle } from "../../support/Helper/payload-function";

import GenericHepler from "../../support/helpers/genericFunctions";

export let jobId: any;
export let locId: any;
export let empNumber: number[] = [];
export let nametest: any = "report-test" + Math.round(1000 * Math.random());
export let firstHeaderData: any = ["Personal", "Job", "Salary"];
export let secondHeaderData: any = [
  "Employee First Name",
  "Job Title",
  "Amount",
];

export let tableData: any = [
  [employess[0], jobTitle, 6000],
  [employess[1], jobTitle, 6000],
  [employess[2], jobTitle, 6000],
];
export let locationName = "Amman" + Math.round(1000 * Math.random());
export let countryCode = "JO";
//greate job via api
addJob(jobTitle).then((id) => {
  jobId = id;
});
//greate location via api
addLocation(locationName, countryCode).then((id) => {
  locId = id;
});
//greate 3 employee via api and assign for that job &location
for (let i = 0; i < 3; i++) {
  addEmployee().then((empNum) => {
    empNumber.push(empNum);
    cy.visit(`/pim/viewPersonalDetails/empNumber/${empNum}`);
    addJobAndLocationEmployee(jobId, locId, empNum);
    addSalaryEmployee(empNum);
  });
}
