module.exports = (req, res) => {

  const grid = {
    harare: 520,
    bulawayo: 280
  };

  let transfer = 0;

  if (grid.harare > 500) {
    transfer = 20;
    grid.harare -= transfer;
    grid.bulawayo += transfer;
  }

  res.status(200).json({
    message: "Power redistributed",
    grid
  });
};
