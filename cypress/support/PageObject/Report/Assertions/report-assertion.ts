import {
  m,
  n,
  nametest,
  v,
} from "../../../../e2e/orangeHr/report-employee-spec.cy";
import GenericHepler from "../../../helpers/genericFunctions";
import { checkReportName, checkToastMessage } from "./function-assertion";
export const checkReportAssetrion = () => {
  //check message
  checkToastMessage();
  //check report name
  checkReportName(nametest);
  //check report first header
  GenericHepler.GenricCheckReportFirstHeader(m);
  //check report second header
  GenericHepler.genricCheckReportSecondHeader(n);
  //check report table row number
  GenericHepler.GenericCheckTableRowNumber(".content-wrapper", ".rgRow", 3);
  //check report table cell
  GenericHepler.GenericCheckTableCell(
    ".content-wrapper",
    ".rgRow",
    ".rgCell",
    v
  );
};
