import Realm from 'realm';

import Request from './requestSchema';

let realm = new Realm({schema: [Request]});

export default realm;
