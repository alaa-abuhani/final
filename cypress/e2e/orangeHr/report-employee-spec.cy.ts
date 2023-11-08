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
import { checkReportAssetrion } from "../../support/PageObject/Report/Assertions/report-assertion";
import AddReport from "../../support/PageObject/Report/Actions/add-report-all-sections";
import {
  visitEmployeeInfo,
  visitHomePage,
} from "../../support/PageObject/common-page-visit";
const loginObj: login = new login();
export let jobTitle: string;
export let reportName: string;
let secondHeaderData: any;
let firstHeaderData: any;
export let locationName: string;
let tableData: any;
let tableRowNumber: number;
let idjob: any;
let idloc: any;
let empNumber: number[] = [];
let employees: any[] = [];
let salaryAmount: string;

beforeEach(() => {
  cy.intercept("/web/index.php/dashboard/index").as("loginpage");
  visitHomePage();
  //admin login
  cy.fixture("login.json").as("loginInfo");
  cy.get("@loginInfo").then((loginInfo: any) => {
    loginObj.loginValid(loginInfo.Admin, loginInfo.Password);
  });
  cy.fixture("employeeInfo.json").as("empInfo");
  cy.get("@empInfo").then((empInfo: any) => {
    jobTitle = empInfo[3].jobTitle;
    locationName = empInfo[3].locationName;
    salaryAmount = empInfo[3].salaryAmount;
    //greate job via api
    addJob(jobTitle).then((id) => {
      idjob = id;
    });
    //greate location via api
    addLocation(locationName, empInfo[3].countryCode).then((id) => {
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
        visitEmployeeInfo(empNum);
        addJobAndLocationEmployee(idjob, idloc, empNum);
        addSalaryEmployee(
          empNum,
          empInfo[3].salaryComponent,
          empInfo[3].salaryAmount,
          empInfo[3].currencyId
        );
      });
    }
    tableData = [
      [employees[0], jobTitle, salaryAmount],
      [employees[1], jobTitle, salaryAmount],
      [employees[2], jobTitle, salaryAmount],
    ];
    tableRowNumber = employees.length;
  });
  cy.fixture("report.json").as("reportInfo");
  cy.get("@reportInfo").then((reportInfo: any) => {
    reportName = reportInfo.reportName;
    firstHeaderData = reportInfo.firstHeaderData;
    secondHeaderData = reportInfo.secondHeaderData;
  });
});

describe("Report functionality", () => {
  it("Report :Generate an Employee report with search criteria ", () => {
    visitHomePage();
    AddReport.ReportDialoge();
    AddReport.AddReportActions();
    checkReportAssetrion(
      reportName,
      firstHeaderData,
      secondHeaderData,
      tableData,
      tableRowNumber
    );
  });
});

afterEach(() => {
  for (let i = 0; i < 3; i++) {
    deleteEmployee(empNumber[i]);
  }
  deleteJob(idjob);
  deleteLocation(idloc);
});
