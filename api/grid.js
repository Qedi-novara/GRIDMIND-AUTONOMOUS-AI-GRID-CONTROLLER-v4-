module.exports = (req, res) => {

  const data = {
    harare: 500 + Math.random() * 50,
    bulawayo: 300 + Math.random() * 40,
    mutare: 180 + Math.random() * 20
  };

  res.status(200).json(data);
};
