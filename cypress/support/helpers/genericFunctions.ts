export default class GenericHepler {
  static GenericRandomString(maxNumber = 1000) {
    return Math.round(maxNumber * Math.random());
  }
  static GenericCheckTableCell(
    rowRapper: string,
    rowName: string,
    cellName: string,
    expectValue: any[]
  ) {
    cy.get(rowRapper)
      .find(rowName)
      .each(($row, rowIndex) => {
        cy.wrap($row)
          .find(cellName)
          .each(($cell, cellIndex) => {
            cy.wrap($cell)
              .invoke("text")
              .should("contain", expectValue[rowIndex][cellIndex]);
          });
      });
  }
  static GenericCheckTableRowNumber(
    rowRapper: any,
    rowName: any,
    expectValue: number
  ) {
    cy.get(rowRapper)
      .find(rowName)
      .then((row) => {
        expect(row.length).to.equal(expectValue);
      });
  }
  static GenricCheckReportFirstHeader(expectValue: any[]) {
    cy.get(".header-wrapper")
      .find(".group-rgRow")
      .each((elem) => {
        cy.wrap(elem)
          .find(".rgHeaderCell")
          .each((cell, cellIndex) => {
            cy.wrap(cell)
              .invoke("text")
              .should("contain", expectValue[cellIndex]);
          });
      });
  }
  //second header}
  static genricCheckReportSecondHeader(expectValue: any[]) {
    cy.get(".header-wrapper")
      .find(".actual-rgRow")
      .each((elem) => {
        cy.wrap(elem)
          .find(".rgHeaderCell")
          .each((cell, cellIndex) => {
            cy.wrap(cell)
              .invoke("text")
              .should("contain", expectValue[cellIndex]);
          });
      });
  }
}
