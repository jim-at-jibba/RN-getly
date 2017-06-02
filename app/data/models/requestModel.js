import uuidV1 from 'uuid/v1';

class RequestModel {
  constructor(title, url, method, viewResponse) {
    this.id = uuidV1();
    this.title = title;
    this.url = url;
    this.method = method;
    this.viewResponse = viewResponse;
  }
}

export default RequestModel;
