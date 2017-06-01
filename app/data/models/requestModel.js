import uuidV1 from 'uuid/v1';

class RequestModel {
  constructor(title, url, method) {
    this.id = uuidV1();
    this.title = title;
    this.url = url;
    this.method = method;
  }
}

export default RequestModel;
