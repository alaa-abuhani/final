export default class Report {
  elements = {
    mainMenue: () => cy.get(".oxd-main-menu").contains("PIM"),
    reportsTab: () =>
      cy.get(".oxd-topbar-body-nav-tab-item").contains("Reports"),
    addReportBtn: () => cy.get(".oxd-button").contains("Add"),
  };

  getPIMPage() {
    this.elements.mainMenue().click();
  }
  getReportsTab() {
    this.elements.reportsTab().click();
  }
  getAddReportDialoge() {
    this.elements.addReportBtn().click();
  }
  getReportPage() {
    this.getPIMPage();
    this.getReportsTab();
    this.getAddReportDialoge();
  }
}
