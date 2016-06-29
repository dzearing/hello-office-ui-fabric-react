import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SimpleDetailsList } from './SimpleDetailsList';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

ReactDOM.render(
  <Fabric>
    <SimpleDetailsList />
  </Fabric>,
  document.getElementById('root'));
