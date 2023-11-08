import DisplayFields from "./display-fields-section";
import ReportName from "./report-name-section";
import { button } from "./save-button-section";
import SelectionCriteria from "./selection-criteria-section";
import Report from "./reports-page-section";
const ReportNameObj: ReportName = new ReportName();
const selectionCriteriaObj: SelectionCriteria = new SelectionCriteria();
const DisplayFieldsObj: DisplayFields = new DisplayFields();
const buttonObj: button = new button();
const ReportObj: Report = new Report();

export default class AddReport {
  static ReportDialoge() {
    ReportObj.getReportPage();
  }
  static AddReportActions() {
    ReportNameObj.getInputNameReport();
    selectionCriteriaObj.selectionCriteriaAction();
    DisplayFieldsObj.DisplayFieldsActions();
    buttonObj.saveReport();
  }
}
