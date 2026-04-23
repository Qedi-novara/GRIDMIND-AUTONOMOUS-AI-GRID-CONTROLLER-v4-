module.exports = (req, res) => {

  const prediction = {
    harare_next: 520,
    bulawayo_next: 310,
    risk_spike: Math.random() > 0.7
  };

  res.status(200).json(prediction);
};
