import { nametest } from "../../../e2e/orangeHr/report-employee-spec.cy";
import { emp, title } from "../../Helper/payload-function";
import GenericHepler from "../../helpers/genericFunctions";
export default class ReportAsserion {
  elements = {
    toastMessege: () => cy.get(".oxd-toast"),
    reportName: () => cy.get("h6").eq(1),
  };
  static checkToastMessage() {
    cy.get(".oxd-toast").should("exist");
    cy.get(".oxd-toast").should("not.exist", { setTimeout: 10000 });
    cy.wait(2000);
  }
  // name report
  static checkReportName(expectValue: string) {
    cy.get("h6").eq(1).should("contain", expectValue);
  }
  //number of rows

  // checkTableCell(

  // checkReportFirstHeader(expectValue: any[]) {

  // //second header}
}
