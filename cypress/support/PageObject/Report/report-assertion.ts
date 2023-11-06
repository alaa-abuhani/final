import { nametest } from "../../../e2e/orangeHr/report-employee-spec.cy";
import { emp, title } from "../../Helper/payload-function";

export default class ReportAsserion {
  elements = {
    toastMessege: () => cy.get(".oxd-toast"),
    // name report
    reportName: () => cy.get("h6"),

    //first header
    firstHeaderTable: () =>
      cy.get(".header-wrapper").find(".group-rgRow").contains("Job"),
    //second header
    secondHeaderTable: () =>
      cy
        .get(".header-wrapper")
        .find(".header-rgRow")
        .contains("Employee First Name"),
    //number of rows
    rowwRapper: () => cy.get(".content-wrapper"),
  };
  checkTableRow(rowRapper: any, rowName: any) {
    cy.get(rowRapper)
      .find(rowName)
      .then((row) => {
        expect(row.length).to.equal(3);
        cy.log(`${row.length} number rows`);
      });
  }
  checkTableCell(
    rowRapper: any,
    rowName: any,
    cellName: any,
    expectValue: any[]
  ) {
    let i = 1;
    cy.log("!!!!!!!!!!!!!!!");
    cy.get(rowRapper)
      .find(rowName)
      .each(($row, rowIndex) => {
        cy.wrap($row)
          .find(cellName)
          .each(($cell, cellIndex) => {
            cy.log(`${i++}number row`);
            cy.wrap($cell)
              .invoke("text")
              .should("contain", expectValue[rowIndex][cellIndex]);
          });
      });
  }
  checkReportName(expectValue: any) {
    this.elements.reportName().should("contain", expectValue);
  }
  checkReportFirstHeader(expectValue: any[]) {
    // let i = 1;
    // // cy.get(".header-wrapper").find(".group-rgRow").contains("Job");
    // cy.get(".header-wrapper")
    //   .find(".group-rgRow")
    //   .each(($row, rowIndex) => {
    //     cy.wrap($row)
    //       .find(".header-content")
    //       .each(($cell, cellIndex) => {
    //         cy.log(`${i++}number row`);
    //         cy.wrap($cell)
    //           .invoke("text")
    //           .should("contain", expectValue[rowIndex][cellIndex]);
    //       });
    //   });
    cy.get(".header-wrapper")
      .find(".group-rgRow")
      .each((elem) => {
        cy.wrap(elem)
          .find(".rgHeaderCell")
          .each((x, cellIndex) => {
            cy.wrap(x)
              .invoke("text")

              .should("contain", expectValue[cellIndex]);
            cy.log(`${x} content cell`);
          });
      });
  }
  //second header}
  checkReportSecondHeader(expectValue: any[]) {
    // cy.get(".header-wrapper")
    //   .find(".header-rgRow")
    //   .contains("Employee First Name");
    let i = 1;
    // cy.get(".header-wrapper").find(".group-rgRow").contains("Job");
    // cy.get(".header-wrapper")
    //   .find(".actual-rgRow")
    //   .each(($row, rowIndex) => {
    //     cy.wrap($row)
    //       .find(".rgHeaderCell")
    //       .find(".header-content")
    //       .each(($cell, cellIndex) => {
    //         cy.log(`${i++}number row`);
    //         cy.wrap($cell)
    //           .invoke("text")
    //           .should("contain", expectValue[rowIndex][cellIndex]);
    //       });
    //   });

    cy.get(".header-wrapper")
      .find(".actual-rgRow")
      .each((elem) => {
        cy.wrap(elem)
          .find(".rgHeaderCell")
          .each((x, cellIndex) => {
            cy.wrap(x)
              .invoke("text")

              .should("contain", expectValue[cellIndex]);
            cy.log(`${i++} content cell`);
          });
      });
  }

  checkToastMessage() {
    cy.get(".oxd-toast").should("exist");
    cy.get(".oxd-toast").should("not.exist", { setTimeout: 10000 });
    cy.wait(1000);
  }
}

//   cy.get(".header-wrapper")
//   .find(".group-rgRow")
//   .each((elem) => {
//     cy.wrap(elem)
//       .find(".rgCell")
//       .each((x ,cellIndex) => {
//         cy.wrap(x)
//           .invoke("text")
//           .then((cell) => {
//             .should("contain", expectValue[cellIndex]);
//             cy.log(`${cell} content cell`);
//           });
//       });
//   });
//
