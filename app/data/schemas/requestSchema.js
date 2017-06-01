class Request {}

Request.schema = {
  name: 'Request',
  primaryKey: 'id',
  properties: {
    id: { type: 'string', indexed: true },
    title: 'string',
    url: 'string',
    method: 'string'
  }
};

export default Request;
