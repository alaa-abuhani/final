// import { nametest } from "../../../e2e/orangeHr/report-employee-spec.cy";
// import { name1, title } from "../../Helper/payload-function";
// import DisplayFields from "./display-fields";

// import SelectionCriteria from "./selection-criteria";
// const selectionCriteriaObj: SelectionCriteria = new SelectionCriteria();
// const DisplayFieldsObj: DisplayFields = new DisplayFields();
// export default class AddReport {
//   elements = {
//     inputName: () => cy.get(".oxd-input--active").eq(1),
//     inputSelect: () => cy.get(" .oxd-select-text-input"),
//     dropdownMenue: () => cy.get(".oxd-select-dropdown"),
//     addBtn: () => cy.get(" .oxd-icon-button"),
//     iconSelect: () => cy.get(" .oxd-select-text--after > .oxd-icon"),
//     switchInput: () => cy.get(" .oxd-switch-input"),
//     saveBtn: () => cy.get(".oxd-button--secondary"),
//     toastMessege: () => cy.get(".oxd-toast"),
//   };

//title report
// getInputNameReport() {
//   this.elements.inputName().type(nametest);
// }
// job
// getinputSelectCriteria() {
//   this.elements.inputSelect().eq(0).click({ force: true });
// }
// getDropdownMenueJob() {
//   this.elements.dropdownMenue().contains("Job Title").click();
// }
// getAddBtn() {
//   this.elements.addBtn().eq(2).click();
// }
// getIconSelectJob() {
//   this.elements.iconSelect().eq(2).click();
// }
// getSelectJob() {
//   this.elements.dropdownMenue().contains(title).click();
// }

// //location

// getDropdownMenueLocation() {
//   this.elements.dropdownMenue().contains("Location").click();
// }

// getIconSelectlocation() {
//   this.elements.iconSelect().eq(3).click();
// }
// getSelectlocation() {
//   this.elements.dropdownMenue().contains(name1).click();
// }

// reportTitleAction() {
//   this.getInputNameReport();
// }
// jobAction() {
//   this.getinputSelectCriteria();
//   this.getDropdownMenueJob();
//   this.getAddBtn();
//   this.getIconSelectJob();
//   this.getSelectJob();
// }
// locationAction() {
//   this.getinputSelectCriteria();
//   this.getDropdownMenueLocation();
//   this.getAddBtn();
//   this.getIconSelectlocation();
//   this.getSelectlocation();
// }

//Display Fields
//Select Display Field Group
//personal

// getinputSelectFieldsGroup() {
//   this.elements.inputSelect().eq(4).click({ force: true });
// }

// getDropdownMenuePersonal() {
//   this.elements.dropdownMenue().contains("Personal").click();
// }

// getinputSelectFieldsDisplay() {
//   this.elements.inputSelect().eq(5).click({ force: true });
// }

// getDropdownMenueEmployee() {
//   this.elements.dropdownMenue().contains("Employee First Name").click();
// }

// getAddBtnFields() {
//   this.elements.addBtn().eq(5).click();
// }

// getSwitchInputFirst() {
//   this.elements.switchInput().eq(0).click();
// }
// personalAction() {
//   this.getinputSelectFieldsGroup();
//   this.getDropdownMenuePersonal();
//   this.getinputSelectFieldsDisplay();
//   this.getDropdownMenueEmployee();
//   this.getAddBtnFields();
//   this.getSwitchInputFirst();
// }
// //job

// getDropdownMenueJobField() {
//   this.elements.dropdownMenue().contains("Job").click();
// }

// getDropdownMenueJobTitle() {
//   this.elements.dropdownMenue().contains("Job Title").click();
// }
// getSwitchInputSecond() {
//   this.elements.switchInput().eq(1).click();
// }

// //job
// jobFieldAction() {
//   this.getinputSelectFieldsGroup();
//   this.getDropdownMenueJobField();
//   this.getinputSelectFieldsDisplay();
//   this.getDropdownMenueJobTitle();
//   this.getAddBtnFields();
//   this.getSwitchInputSecond();
// }
// getSwitchInputLast() {
//   this.elements.switchInput().eq(2).click();
// }
// getDropdownMenueSalary() {
//   this.elements.dropdownMenue().contains("Salary").click();
// }
// getDropdownMenueAmount() {
//   this.elements.dropdownMenue().contains("Amount").click();
// }
// //salary
// salaryAction() {
//   this.getinputSelectFieldsGroup();
//   this.getDropdownMenueSalary();
//   this.getinputSelectFieldsDisplay();
//   this.getDropdownMenueAmount();
//   this.getAddBtnFields();
//   this.getSwitchInputLast();
// }

// button
// saveReport() {
//   this.elements.saveBtn().click({ force: true });
// }
// }
// selectionCriteriaObj.selectionCriteriaAction();
// DisplayFieldsObj.DisplayFieldsActions();
