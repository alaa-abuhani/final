import { nametest } from "../../../e2e/orangeHr/report-employee-spec.cy";
import { name1, title } from "../../Helper/payload-function";

export default class AddReport {
  elements = {
    inputName: () => cy.get(".oxd-input--active").eq(1),
    inputSelect: () => cy.get(" .oxd-select-text-input"),
    dropdownMenue: () => cy.get(".oxd-select-dropdown"),
    addBtn: () => cy.get(" .oxd-icon-button"),
    iconSelect: () => cy.get(" .oxd-select-text--after > .oxd-icon"),
    switchInput: () => cy.get(" .oxd-switch-input"),
    saveBtn: () => cy.get(".oxd-button--secondary"),
    toastMessege: () => cy.get(".oxd-toast"),
  };

  //tittle report
  getInputNameReport() {
    this.elements.inputName().type(nametest);
  }
  // job
  getinputSelectCriteria() {
    this.elements.inputSelect().eq(0).click({ force: true });
  }
  getDropdownMenueJob() {
    this.elements.dropdownMenue().contains("Job Title").click();
  }
  getAddBtn() {
    this.elements.addBtn().eq(2).click();
  }
  getIconSelectJob() {
    this.elements.iconSelect().eq(2).click();
  }
  getSelectJob() {
    this.elements.dropdownMenue().contains(title).click();
  }

  //location

  getDropdownMenueLocation() {
    this.elements.dropdownMenue().contains("Location").click();
  }

  getIconSelectlocation() {
    this.elements.iconSelect().eq(3).click();
  }
  getSelectlocation() {
    this.elements.dropdownMenue().contains(name1).click();
  }

  reportTitleAction() {
    this.getInputNameReport();
  }
  jobAction() {
    this.getinputSelectCriteria();
    this.getDropdownMenueJob();
    this.getAddBtn();
    this.getIconSelectJob();
    this.getSelectJob();
  }
  locationAction() {
    this.getinputSelectCriteria();
    this.getDropdownMenueLocation();
    this.getAddBtn();
    this.getIconSelectlocation();
    this.getSelectlocation();
  }

  //Display Fields
  //Select Display Field Group
  //personal
  // cy.get("  .oxd-select-text-input").eq(4).click({ force: true });
  getinputSelectFieldsGroup() {
    this.elements.inputSelect().eq(4).click({ force: true });
  }
  // cy.get(".oxd-select-dropdown").contains("Personal").click();
  getDropdownMenuePersonal() {
    this.elements.dropdownMenue().contains("Personal").click();
  }

  // cy.get("  .oxd-select-text-input").eq(5).click({ force: true });
  getinputSelectFieldsDisplay() {
    this.elements.inputSelect().eq(5).click({ force: true });
  }
  // cy.get(".oxd-select-dropdown").contains("Employee First Name").click();
  getDropdownMenueEmployee() {
    this.elements.dropdownMenue().contains("Employee First Name").click();
  }
  // cy.get(" .oxd-icon-button").eq(5).click();
  getAddBtnFields() {
    this.elements.addBtn().eq(5).click();
  }
  // cy.get(" .oxd-switch-input").eq(0).click();
  getSwitchInputFirst() {
    this.elements.switchInput().eq(0).click();
  }
  personalAction() {
    this.getinputSelectFieldsGroup();
    this.getDropdownMenuePersonal();
    this.getinputSelectFieldsDisplay();
    this.getDropdownMenueEmployee();
    this.getAddBtnFields();
    this.getSwitchInputFirst();
  }
  //joob
  // cy.get("  .oxd-select-text-input").eq(4).click({ force: true });
  getDropdownMenueJobField() {
    this.elements.dropdownMenue().contains("Job").click();
  }
  // cy.get(".oxd-select-dropdown").contains("Job Title").click();
  getDropdownMenueJobTitle() {
    this.elements.dropdownMenue().contains("Job Title").click();
  }
  getSwitchInputSecond() {
    this.elements.switchInput().eq(1).click();
  }

  ////jobb
  jobFieldAction() {
    this.getinputSelectFieldsGroup();
    // cy.get(".oxd-select-dropdown").contains("Job").click();
    this.getDropdownMenueJobField();
    // cy.get("  .oxd-select-text-input").eq(5).click({ force: true });
    this.getinputSelectFieldsDisplay();
    // cy.get(".oxd-select-dropdown").contains("Job Title").click();
    this.getDropdownMenueJobTitle();
    // cy.get(" .oxd-icon-button").eq(5).click();
    this.getAddBtnFields();
    // cy.get(" .oxd-switch-input").eq(1).click();
    this.getSwitchInputSecond();
  }
  //salary
  salaryAction() {
    // cy.get("  .oxd-select-text-input").eq(4).click({ force: true });
    this.getinputSelectFieldsGroup();
    // cy.get(".oxd-select-dropdown").contains("Salary").click();
    this.getDropdownMenueSalary();
    // cy.get("  .oxd-select-text-input").eq(5).click({ force: true });
    this.getinputSelectFieldsDisplay();

    // cy.get(".oxd-select-dropdown").contains("Amount").click();
    this.getDropdownMenueAmount();
    // cy.get(" .oxd-icon-button").eq(5).click();
    this.getAddBtnFields();
    // cy.get(" .oxd-switch-input").eq(2).click();
    this.getSwitchInputLast();
  }
  getSwitchInputLast() {
    this.elements.switchInput().eq(2).click();
  }
  getDropdownMenueSalary() {
    this.elements.dropdownMenue().contains("Salary").click();
  }
  getDropdownMenueAmount() {
    this.elements.dropdownMenue().contains("Amount").click();
  }

  // // button
  // cy.get(".oxd-button--secondary").click({ force: true });
  saveDialog() {
    this.elements.saveBtn().click({ force: true });
  }
}

// cy.get(".oxd-toast").should("exist");
// cy.get(".oxd-toast").should("not.exist", { setTimeout: 10000 });
