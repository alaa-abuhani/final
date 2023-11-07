// import AddReport from "./add-report-dialog";
// const AddReportObj: AddReport = new AddReport();
export class button {
  elements = {
    saveBtn: () => cy.get(".oxd-button--secondary"),
  };
  saveReport() {
    this.elements.saveBtn().click({ force: true });
  }
}
