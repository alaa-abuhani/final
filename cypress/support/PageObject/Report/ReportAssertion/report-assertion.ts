import {
  m,
  n,
  nametest,
  v,
} from "../../../../e2e/orangeHr/report-employee-spec.cy";
import GenericHepler from "../../../helpers/genericFunctions";
import { checkReportName, checkToastMessage } from "./function-assertion";
export const checkReportAssetrion = () => {
  checkToastMessage();
  checkReportName(nametest);
  GenericHepler.GenricCheckReportFirstHeader(m);
  GenericHepler.genricCheckReportSecondHeader(n);
  GenericHepler.GenericCheckTableRowNumber(".content-wrapper", ".rgRow", 3);
  GenericHepler.GenericCheckTableCell(
    ".content-wrapper",
    ".rgRow",
    ".rgCell",
    v
  );
};
