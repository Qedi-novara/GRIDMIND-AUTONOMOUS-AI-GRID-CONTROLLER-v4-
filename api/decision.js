module.exports = (req, res) => {

  const load = 600;
  const supply = 550;

  let action = "STABLE";

  if (load > supply) {
    action = "REDUCE LOAD / SHIFT POWER";
  }

  if (load > 650) {
    action = "EMERGENCY MODE";
  }

  res.status(200).json({ action });
};
