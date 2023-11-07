import { nametest } from "../../../e2e/orangeHr/report-employee-spec.cy";
// import AddReport from "./add-report-dialog";
// const AddReportObj: AddReport = new AddReport();
export default class ReportName {
  elements = {
    inputName: () => cy.get(".oxd-input--active").eq(1),
  };
  getInputNameReport() {
    this.elements.inputName().type(nametest);
  }
}
