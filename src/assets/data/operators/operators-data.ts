import { IOperatorData } from 'src/app/core/models/operator-data';

const basePath = 'assets/markdown/operators/';

export const operatorsData = {
  tap: {
    shortDescription:
      'Perform a side effect for every emission on the source Observable, but return an Observable that is identical to the source.',
    signature:
      'tap(nextOrObserver: function, error: function, complete: function): Observable',
    path: `${basePath}tap.md`,
  } as IOperatorData,
  map: {
    shortDescription:
      'Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.',
    signature: 'map(project: Function, thisArg: any): Observable',
    path: `${basePath}map.md`,
  } as IOperatorData,
};
