export default class DisplayFields {
  elements = {
    inputSelect: () => cy.get(" .oxd-select-text-input"),
    dropdownMenue: () => cy.get(".oxd-select-dropdown"),
    addBtn: () => cy.get(" .oxd-icon-button"),

    switchInput: () => cy.get(" .oxd-switch-input"),
  };
  getinputSelectFieldsGroup() {
    this.elements.inputSelect().eq(4).click({ force: true });
  }

  getDropdownMenuePersonal() {
    this.elements.dropdownMenue().contains("Personal").click();
  }

  getinputSelectFieldsDisplay() {
    this.elements.inputSelect().eq(5).click({ force: true });
  }

  getDropdownMenueEmployee() {
    this.elements.dropdownMenue().contains("Employee First Name").click();
  }

  getAddBtnFields() {
    this.elements.addBtn().eq(5).click();
  }

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
  //job

  getDropdownMenueJobField() {
    this.elements.dropdownMenue().contains("Job").click();
  }

  getDropdownMenueJobTitle() {
    this.elements.dropdownMenue().contains("Job Title").click();
  }
  getSwitchInputSecond() {
    this.elements.switchInput().eq(1).click();
  }

  //job
  jobFieldAction() {
    this.getinputSelectFieldsGroup();
    this.getDropdownMenueJobField();
    this.getinputSelectFieldsDisplay();
    this.getDropdownMenueJobTitle();
    this.getAddBtnFields();
    this.getSwitchInputSecond();
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
  //salary
  salaryAction() {
    this.getinputSelectFieldsGroup();
    this.getDropdownMenueSalary();
    this.getinputSelectFieldsDisplay();
    this.getDropdownMenueAmount();
    this.getAddBtnFields();
    this.getSwitchInputLast();
  }

  DisplayFieldsActions() {
    this.personalAction();
    this.jobFieldAction();
    this.salaryAction();
  }
}
