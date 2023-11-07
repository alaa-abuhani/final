/// <reference types="cypress" />

import { ICreateEmployeePayload } from "../API/payload/empAPIPayload";
import { ICreateJopTitlePayload } from "../API/payload/jobTitlePayload";
import { ICreateLocationPayload } from "../API/payload/location-payload";
import { ICreateEmpolyeeResponse } from "../API/response/empAPIResponse";

declare global {
  namespace Cypress {
    interface Chainable {
      addNewUser: (
        requestUrl: string,
        EmployeePayload: ICreateEmployeePayload
      ) => Chainable<ICreateEmpolyeeResponse>;
      AddNewEmployee: (
        requestUrl: string,
        empPayload: ICreateEmployeePayload
      ) => Chainable<any>;
      AddNewLocation: (
        requestUrl: string,
        userPayload: ICreateLocationPayload
      ) => Chainable<any>;
      AddNewJob: (
        requestURL: string,
        JopPayload: ICreateJopTitlePayload
      ) => Chainable<any>;
    }
  }
}
Cypress.Commands.add(
  "addNewUser",
  (requestUrl: string, EmployeePayload: ICreateEmployeePayload) => {
    cy.request({
      method: "POST",
      url: requestUrl,
      body: EmployeePayload,
    });
  }
);

Cypress.Commands.add(
  "AddNewEmployee",
  (requestUrl: string, empPayload: ICreateEmployeePayload) => {
    return cy.api({
      method: "POST",
      url: requestUrl,
      body: empPayload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
);

Cypress.Commands.add(
  "AddNewLocation",
  (requestUrl: string, locationPayload: ICreateLocationPayload) => {
    return cy.request({
      method: "POST",
      url: requestUrl,
      body: locationPayload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
);

//
Cypress.Commands.add(
  "AddNewJob",
  (requestURL: string, jobPayload: ICreateJopTitlePayload) => {
    return cy.api({
      method: "POST",
      url: requestURL,
      body: jobPayload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
);
