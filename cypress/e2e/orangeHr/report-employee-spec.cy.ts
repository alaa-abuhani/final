import login from "../../support/PageObject/login";
import {
  addEmployee,
  addJob,
  addJobAndLocationEmployee,
  addLocation,
  addSalaryEmployee,
  deleteEmployee,
  deleteJob,
  deleteLocation,
} from "../../support/Helper/api-helper";
import GenericHepler from "../../support/helpers/genericFunctions";
import { checkReportAssetrion } from "../../support/PageObject/Report/Assertions/report-assertion";
import AddReport from "../../support/PageObject/Report/Actions/add-report-all-sections";

const loginObj: login = new login();

export let jobTitle = "QA Engineer·" + Math.round(1000 * Math.random());
export let nametest = "report-test" + Math.round(1000 * Math.random());
export let secondHeaderData: any = [
  "Employee First Name",
  "Job Title",
  "Amount",
];
export let firstHeaderData = ["Personal", "Job", "Salary"];
export let locationName = "Amman" + Math.round(1000 * Math.random());
export let countryCode = "JO";
export let tableData: any;
export let idjob: any;
export let idloc: any;
let salaryComponent = "5000";
let salaryAmount = "6000";
let currencyId = "JOD";
let empNumber: number[] = [];

beforeEach(() => {
  cy.intercept("/web/index.php/dashboard/index").as("loginpage");
  cy.visit("/");
  //admin login
  cy.fixture("login.json").as("logininfo");
  cy.get("@logininfo").then((logininfo: any) => {
    loginObj.loginValid(logininfo[0].Username, logininfo[0].Password);
  });
  //greate job via api
  addJob(jobTitle).then((id) => {
    idjob = id;
  });
  //greate location via api
  addLocation(locationName, countryCode).then((id) => {
    idloc = id;
  });
  //greate 3 employee via api and assign for that job &location
  let employess: any[] = [];
  let firstName: any;
  let id: any;
  let lastName: any;

  for (let i = 0; i < 3; i++) {
    firstName = "alaaa" + Math.round(10000 * Math.random());
    id = "15" + Math.round(100 * Math.random());
    lastName = "abuhani" + Math.round(10000 * Math.random());
    employess.push(firstName);
    addEmployee(firstName, id, lastName).then((empNum) => {
      empNumber.push(empNum);
      cy.visit(`/pim/viewPersonalDetails/empNumber/${empNum}`);
      addJobAndLocationEmployee(idjob, idloc, empNum);
      addSalaryEmployee(empNum, salaryComponent, salaryAmount, currencyId);
    });
  }
  tableData = [
    [employess[0], jobTitle, 6000],
    [employess[1], jobTitle, 6000],
    [employess[2], jobTitle, 6000],
  ];
});

describe("Report functionality", () => {
  it("Report :  Generate an Employee report with search criteria ", () => {
    cy.visit("/");
    AddReport.ReportDialoge();
    AddReport.AddReportActions();
    checkReportAssetrion();
  });
});

afterEach(() => {
  for (let i = 0; i < 3; i++) {
    deleteEmployee(empNumber[i]);
  }
  deleteJob(idjob);
  deleteLocation(idloc);
});
