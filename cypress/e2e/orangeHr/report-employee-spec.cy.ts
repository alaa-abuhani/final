import login from "../../support/PageObject/login";
import {
  addEmloyee,
  addJob,
  addJobAndLocationEmployee,
  addLocation,
  addSalaryEmployee,
} from "../../support/Helper/api-helper";
import { emp, name1, title } from "../../support/Helper/payload-function";
import Report from "../../support/PageObject/Report/reports-page";
// import AddReport from "../../support/PageObject/Report/add-report-dialog";

import GenericHepler from "../../support/helpers/genericFunctions";
import { checkReportAssetrion } from "../../support/PageObject/Report/Assertions/report-assertion";
import c from "../../support/PageObject/Report/add-report-section";

// const AddReportObj: AddReport = new AddReport();
const loginObj: login = new login();
const reportObj: Report = new Report();

let empNumber: number[] = [];

export let idjob: any;
export let idloc: any;
export let nametest: any;
export let m: any;
export let n: any;
export let v: any;

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
    addEmloyee().then((empNum) => {
      empNumber.push(empNum);
      cy.visit(`/pim/viewPersonalDetails/empNumber/${empNum}`);
      addJobAndLocationEmployee(idjob, idloc, empNum);
      addSalaryEmployee(empNum);
    });
  }
});

describe("time sheet report functionality", () => {
  it("Report :  Generate an Employee report with search criteria ", () => {
    m = ["Personal", "Job", "Salary"];
    n = ["Employee First Name", "Job Title", "Amount"];
    console.log(emp);
    v = [
      [emp[0], title, 6000],
      [emp[1], title, 6000],
      [emp[2], title, 6000],
    ];
    console.log(v);
    cy.log(name1);
    cy.log(title);
    nametest = "testing" + Math.round(1000 * Math.random());
    cy.visit("/");
    reportObj.getReportActions();
    // AddReportObj.reportTitleAction();
    // AddReportObj.jobAction();
    // AddReportObj.locationAction();
    // AddReportObj.personalAction();
    // AddReportObj.jobFieldAction();
    // AddReportObj.salaryAction();
    // AddReportObj.saveReport();
    c.dwwww();
    checkReportAssetrion();
  });
});
