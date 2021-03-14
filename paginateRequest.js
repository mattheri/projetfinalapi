const _chunk = require("lodash/chunk");

const paginateRequest = async (req, query) => {
  const { page, perpage = 4 } = query;
  const response = _chunk(await req(), parseInt(perpage));
  return JSON.stringify(response[parseInt(page)]);
};

module.exports = paginateRequest;
