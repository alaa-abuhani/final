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

export let jobTitle = "civil Engineer" + Math.round(10000 * Math.random());
// export let jobTitle: string;
export let nametest =
  "employee-report-test" + Math.round(10000 * Math.random());
export let secondHeaderData: any = [
  "Employee First Name",
  "Job Title",
  "Amount",
];
export let firstHeaderData = ["Personal", "Job", "Salary"];
export let locationName = "Amman" + Math.round(1000 * Math.random());
export let countryCode = "JO";
// export let locationName: string;
// export let countryCode: string;
export let tableData: any;
export let idjob: any;
export let idloc: any;
let empNumber: number[] = [];
let employees: any[] = [];
let firstName: any;
let id: any;
let lastName: any;
// let salaryComponent = "5000";
// let salaryAmount = "6000";
// let currencyId = "JOD";
let salaryComponent: string;
let salaryAmount: string;
let currencyId: string;

beforeEach(() => {
  cy.intercept("/web/index.php/dashboard/index").as("loginpage");
  cy.visit("/");

  //admin login
  cy.fixture("login.json").as("logininfo");
  cy.get("@logininfo").then((logininfo: any) => {
    loginObj.loginValid(logininfo[0].Username, logininfo[0].Password);
  });
  cy.fixture("employeeInfo2.json").as("empInfo");
  cy.get("@empInfo").then((empInfo: any) => {
    // jobTitle = empInfo[3].jobTitle;
    // locationName = empInfo[3].locationName;
    // countryCode = empInfo[3].countryCode;
    salaryComponent = empInfo[3].salaryComponent;
    salaryAmount = empInfo[3].salaryAmount;
    currencyId = empInfo[3].currencyId;
    //greate job via api
    addJob(jobTitle).then((id) => {
      idjob = id;
    });
    //greate location via api

    addLocation(locationName, countryCode).then((id) => {
      idloc = id;
    });
    //greate 3 employee via api and assign for that job &location
    for (let i = 0; i < 3; i++) {
      employees.push(empInfo[i].firstName);
      addEmployee(
        empInfo[i].firstName,
        empInfo[i].id,
        empInfo[i].lastName
      ).then((empNum) => {
        empNumber.push(empNum);
        cy.visit(`/pim/viewPersonalDetails/empNumber/${empNum}`);
        addJobAndLocationEmployee(idjob, idloc, empNum);
        addSalaryEmployee(empNum, salaryComponent, salaryAmount, currencyId);
      });
    }
    tableData = [
      [employees[0], jobTitle, salaryAmount],
      [employees[1], jobTitle, salaryAmount],
      [employees[2], jobTitle, salaryAmount],
    ];
  });
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
