import uuidV1 from 'uuid/v1';

class RequestModel {
  constructor(title, url, method, showResponse) {
    this.id = uuidV1();
    this.title = title;
    this.url = url;
    this.method = method;
    this.showResponse = showResponse;
  }
}

export default RequestModel;
