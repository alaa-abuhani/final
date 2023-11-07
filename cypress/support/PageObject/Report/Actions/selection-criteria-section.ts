import {
  jobTitle,
  locationName,
} from "../../../../e2e/orangeHr/report-employee-spec.cy";

export default class SelectionCriteria {
  elements = {
    inputSelect: () => cy.get(" .oxd-select-text-input"),
    dropdownMenue: () => cy.get(".oxd-select-dropdown"),
    addBtn: () => cy.get(" .oxd-icon-button"),
    iconSelect: () => cy.get(" .oxd-select-text--after > .oxd-icon"),
  };
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
    this.elements.dropdownMenue().contains(jobTitle).click();
  }

  //  location

  getDropdownMenueLocation() {
    this.elements.dropdownMenue().contains("Location").click();
  }

  getIconSelectlocation() {
    this.elements.iconSelect().eq(3).click();
  }
  getSelectlocation() {
    this.elements.dropdownMenue().contains(locationName).click();
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

  selectionCriteriaAction = () => {
    this.jobAction();
    this.locationAction();
  };
}
