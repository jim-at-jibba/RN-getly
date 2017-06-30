import realm from '../schemas/realms';
import RequestModel from '../models/requestModel';

let RequestService = {
  findAll() {
    return realm.objects('Request');
  },

  save(requestObj) {
    console.log('Realm Save:', requestObj);
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
  }
};

// // seed db
// console.log(RequestService.findAll().length);
// if(RequestService.findAll().length <= 3) {
//   RequestService.save(new RequestModel('Demo 1', 'https://facebook.github.io/react-native/movies.json', 'GET', true));
//   RequestService.save(new RequestModel('Demo 2', 'https://facebook.github.io/react-native/movies.json', 'GET', false));
//   RequestService.save(new RequestModel('Demo 3', 'https://facebook.github.io/react-native/movies.json', 'GET', true));
// }

export default RequestService;
