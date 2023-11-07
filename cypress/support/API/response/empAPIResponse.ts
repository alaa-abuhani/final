export interface ICreateEmpolyeeResponse {
  data: [
    {
      empNumber: number;
      lastName: string;
      firstName: string;
      middleName: string;
      employeeId: string;
      terminationId: null;
    }
  ];
  meta: {
    total: number;
  };
  rels: any[];
}
