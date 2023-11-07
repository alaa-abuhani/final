import login from "../../support/PageObject/login";
import {
  addEmployee,
  addJob,
  addJobAndLocationEmployee,
  addLocation,
  addSalaryEmployee,
} from "../../support/Helper/api-helper";
import { emp, name1, title } from "../../support/Helper/payload-function";

import GenericHepler from "../../support/helpers/genericFunctions";
import { checkReportAssetrion } from "../../support/PageObject/Report/Assertions/report-assertion";
import AddReport from "../../support/PageObject/Report/Actions/add-report-all-sections";

const loginObj: login = new login();

let empNumber: number[] = [];

export let idjob: any;
export let idloc: any;
export let nametest: any;
export let secondHeaderData: any;
export let firstHeaderData: any;
export let tableData: any;

beforeEach(() => {
  cy.intercept("/web/index.php/dashboard/index").as("loginpage");
  cy.visit("/");
  //admin login
  cy.fixture("login.json").as("logininfo");
  cy.get("@logininfo").then((logininfo: any) => {
    loginObj.loginValid(logininfo[0].Username, logininfo[0].Password);
  });
  //greate job via api
  addJob(title).then((id) => {
    idjob = id;
  });
  //greate location via api
  addLocation(name1).then((id) => {
    idloc = id;
  });
  //greate 3 employee via api and assign for that job &location
  for (let i = 0; i < 3; i++) {
    addEmployee().then((empNum) => {
      empNumber.push(empNum);
      cy.visit(`/pim/viewPersonalDetails/empNumber/${empNum}`);
      addJobAndLocationEmployee(idjob, idloc, empNum);
      addSalaryEmployee(empNum);
    });
  }
  firstHeaderData = ["Personal", "Job", "Salary"];
  secondHeaderData = ["Employee First Name", "Job Title", "Amount"];
  console.log(emp);
  tableData = [
    [emp[0], title, 6000],
    [emp[1], title, 6000],
    [emp[2], title, 6000],
  ];
  console.log(tableData);
  cy.log(name1);
  cy.log(title);
  nametest = "report-test" + Math.round(1000 * Math.random());
});

describe("Report functionality", () => {
  it("Report :  Generate an Employee report with search criteria ", () => {
    cy.visit("/");
    AddReport.ReportDialoge();
    AddReport.AddReportActions();
    checkReportAssetrion();
  });
});
