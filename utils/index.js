module.exports = {
  sendData: (res, Data, message) => {
    return res.send({
      message,
      Data,
    });
  },
};
