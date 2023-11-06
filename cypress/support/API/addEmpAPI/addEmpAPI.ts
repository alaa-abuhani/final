let empNumber: number;
export default class employee {
  addEmloyeeViaAPI(
    firstName: string,
    middleName: string,
    lastName: string,
    empPicture: null,
    employeeId: string,
    password: string
  ) {
    return cy
      .request({
        method: "POST",
        url: "/api/v2/pim/employees",
        body: {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          empPicture: empPicture,
          employeeId: employeeId,
        },
      })
      .then((response) => response.body.data.empNumber);
  }

  deleteEmployee() {
    cy.request({
      // delete the created employee
      method: "DELETE",
      url: "/api/v2/pim/employees",
      body: {
        ids: [empNumber],
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  }
}