import login from "../../support/PageObject/login";
import {
  addEmloyee,
  addJob,
  addJobAndLocationEmployee,
  addLocation,
  addSalaryEmployee,
} from "../../support/Helper/api-helper";
import { emp, name1, title } from "../../support/Helper/payload-function";
import Report from "../../support/PageObject/Report/reports-page-section";

const loginObj: login = new login();
const reportObj: Report = new Report();

let empNumber: number[] = [];

export let idjob: any;
export let idloc: any;
export let nametest: any;

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
    cy.log(name1);
    cy.log(title);
    nametest = "testing" + Math.round(1000 * Math.random());
    // for (let i = 0; i < 3; i++) {
    //   cy.log(`${empNumber[i]}`);
    // }
    cy.visit("/");
    reportObj.getReportActions();
    // cy.get(".oxd-main-menu").contains("PIM").click();
    // cy.get(".oxd-topbar-body-nav-tab-item").contains("Reports").click();
    // cy.get(".oxd-button").contains("Add").click();
    cy.get(".oxd-input--active").eq(1).type(nametest);
    // job
    // cy.get(".oxd-icon").eq(0).click({ force: true });

    cy.get(" .oxd-select-text-input").eq(0).click({ force: true });

    cy.get(".oxd-select-dropdown").contains("Job Title").click();

    cy.get(" .oxd-icon-button").eq(2).click();

    cy.get(" .oxd-select-text--after > .oxd-icon").eq(2).click();
    cy.get(".oxd-select-dropdown").contains(title).click();

    //location
    // cy.get(".oxd-icon").eq(0).click({ force: true });

    cy.get(" .oxd-select-text-input").eq(0).click({ force: true });

    cy.get(".oxd-select-dropdown").contains("Location").click();

    cy.get(" .oxd-icon-button").eq(2).click();

    cy.get(" .oxd-select-text--after > .oxd-icon").eq(3).click();
    cy.get(".oxd-select-dropdown").contains(name1).click();
    //Display Fields
    //Select Display Field Group
    //personal
    cy.get("  .oxd-select-text-input").eq(4).click({ force: true });
    cy.get(".oxd-select-dropdown").contains("Personal").click();
    cy.get("  .oxd-select-text-input").eq(5).click({ force: true });
    cy.get(".oxd-select-dropdown").contains("Employee First Name").click();
    cy.get(" .oxd-icon-button").eq(5).click();
    cy.get(" .oxd-switch-input").eq(0).click();
    //job
    cy.get("  .oxd-select-text-input").eq(4).click({ force: true });
    cy.get(".oxd-select-dropdown").contains("Job").click();
    cy.get("  .oxd-select-text-input").eq(5).click({ force: true });
    cy.get(".oxd-select-dropdown").contains("Job Title").click();
    cy.get(" .oxd-icon-button").eq(5).click();
    cy.get(" .oxd-switch-input").eq(1).click();

    //salary
    cy.get("  .oxd-select-text-input").eq(4).click({ force: true });
    cy.get(".oxd-select-dropdown").contains("Salary").click();
    cy.get("  .oxd-select-text-input").eq(5).click({ force: true });
    cy.get(".oxd-select-dropdown").contains("Amount").click();
    cy.get(" .oxd-icon-button").eq(5).click();
    cy.get(" .oxd-switch-input").eq(2).click();
    // button
    cy.get(".oxd-button--secondary").click({ force: true });

    cy.get(".oxd-toast").should("exist");
    cy.get(".oxd-toast").should("not.exist", { setTimeout: 10000 });
    cy.wait(3000);
    // name report
    cy.get("h6").should("contain", nametest);
    cy.get(".inner-content-table").children().as("children");
    cy.get(".inner-content-table").should("have.length", 1);

    //
    // cy.get(
    //   "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div > revo-grid > div > div > revogr-viewport-scroll > div > div.vertical-inner > div > revogr-overlay-selection > revogr-data"
    // ).should("have.length", 1);
    // cy.get("revogr-data");

    // cy.get(
    //   "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div > revo-grid > div > div > revogr-viewport-scroll > div > div.vertical-inner > div > revogr-overlay-selection"
    // )
    //   .children()
    //   .eq(3)
    //   .children();
    // cy.get(
    //   "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div > revo-grid > div > div > revogr-viewport-scroll > div > div.vertical-inner > div > revogr-overlay-selection"
    // )
    //   .children()
    //   .eq(3)
    //   .parent();

    // cy.get(
    //   "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div > revo-grid > div > div > revogr-viewport-scroll > div > div.header-wrapper "
    // ).then((s) => cy.log(`${s.length}`));
    // cy.get(
    //   "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div > revo-grid > div > div > revogr-viewport-scroll > div > div.header-wrapper > revogr-header > div.group-rgRow"
    // );

    //table
    // cy.get(".oxd-table-header")
    // .contains(colomnHeader)
    // .invoke("index")
    // .then((colomnIndex) => {
    //   //find all rows in  table body
    //   cy.get(".oxd-table-body")
    //     .find(".oxd-table-card")
    //     .each((elem) => {
    //       cy.wrap(elem)
    //         .find(".oxd-table-row")
    //         .find(".oxd-table-cell")
    //         .eq(colomnIndex)
    //         .invoke("text")
    //         .then((cell) => {
    //           if (cell.trim() == expectedValue.trim()) {
    //             //expected the value in the row cell of index header , the test should pass
    //             expect(
    //               cell.trim(),
    //               `found the row with ${colomnHeader} = ${expectedValue}`
    //             ).to.equal(expectedValue.trim());
    //           }
    //         });
    //     });
    // });
    //first header
    cy.get(".header-wrapper").find(".group-rgRow").contains("Job");
    //second header
    cy.get(".header-wrapper")
      .find(".header-rgRow")
      .contains("Employee First Name");
    //number of rows
    cy.get(".content-wrapper")
      .find(".rgRow")
      .then((row) => {
        expect(row.length).to.equal(3);
        cy.log(`${row.length} number rows`);
      });

    let v = [
      [emp[0], title, 6000],
      [emp[1], title, 6000],
      [emp[2], title, 6000],
    ];

    let i = 1;
    cy.log("!!!!!!!!!!!!!!!");
    cy.get(".content-wrapper")
      .find(".rgRow")
      .each(($row, rowIndex) => {
        cy.wrap($row)
          .find(".rgCell")
          .each(($cell, cellIndex) => {
            cy.log(`${i++}number row`);
            cy.wrap($cell)
              .invoke("text")
              .should("contain", v[rowIndex][cellIndex]);

            // }
          });
        // });
      });

    //   // }
    // }
    // });
  });
});

// });
// important
// cy.get(".content-wrapper")
//   .find(".rgRow")
//   .each((elem) => {
//     cy.wrap(elem)
//       .find(".rgCell")
//       .invoke("text")
//       .then((cell) => {
//         cy.log(`${cell}first colomns fist name`);
//       });
//   });

//important 2
// cy.get(".content-wrapper")
// .find(".rgRow")
// .each((elem) => {
//   cy.wrap(elem)
//     .find(".rgCell")
//     .each((x) => {
//       cy.wrap(x)
//         .invoke("text")
//         .then((cell) => {
//           cy.log(`${cell} content cell`);
//         });
//     });
// });
// });
// });
