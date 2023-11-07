import DisplayFields from "./display-fields";
import ReportName from "./report-name";
import { button } from "./save-button";
import SelectionCriteria from "./selection-criteria";
const ReportNameObj: ReportName = new ReportName();
const selectionCriteriaObj: SelectionCriteria = new SelectionCriteria();
const DisplayFieldsObj: DisplayFields = new DisplayFields();
const buttonObj: button = new button();
// export const AddReport :() => {
export default class c {
  static dwwww() {
    ReportNameObj.getInputNameReport();
    selectionCriteriaObj.selectionCriteriaAction();
    DisplayFieldsObj.DisplayFieldsActions();
    buttonObj.saveReport();
    // }
  }
}
