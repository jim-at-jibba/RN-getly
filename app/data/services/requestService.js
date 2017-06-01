import realm from '../schemas/realms';
import RequestModel from '../models/requestModel';

let RequestService = {
  findAll() {
    return realm.objects('Request');
  },

  save(requestObj) {
    realm.write(() => {
      realm.create('Request', requestObj);
    });
  },
  deleteAll() {
    realm.write(() => {
      let allRequests = realm.objects('Request');
      return realm.delete(allRequests);
    });
  },
  deleteOne(id) {
    realm.write(() => {
      let request = realm.objectForPrimaryKey('Request', id);
      realm.delete(request);
    });
    return realm.objects('Request');
  }
};

export default RequestService;
