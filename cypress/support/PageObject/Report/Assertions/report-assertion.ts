import {
  firstHeaderData,
  secondHeaderData,
  nametest,
  tableData,
} from "../../../../e2e/orangeHr/report-employee-spec.cy";
import GenericHepler from "../../../helpers/genericFunctions";
import { checkReportName, checkToastMessage } from "./function-assertion";

export const checkReportAssetrion = () => {
  //check message
  checkToastMessage();
  //check report name
  checkReportName(nametest);
  //check report first header
  GenericHepler.GenricCheckReportFirstHeader(firstHeaderData);
  //check report second header
  GenericHepler.genricCheckReportSecondHeader(secondHeaderData);
  //check report table row number
  GenericHepler.GenericCheckTableRowNumber(".content-wrapper", ".rgRow", 3);
  //check report table cell
  GenericHepler.GenericCheckTableCell(
    ".content-wrapper",
    ".rgRow",
    ".rgCell",
    tableData
  );
};
