export default  {
  request: ({ method, path, data }, mapper) => {
    // const methodCap = mayBeString(method).unit('post').toLowerCase();
    const requestMethod = method.toLowerCase();

    return fetch(path, { method: requestMethod })
      .then(res => res.json())
      .then(mapper);
  }
};
