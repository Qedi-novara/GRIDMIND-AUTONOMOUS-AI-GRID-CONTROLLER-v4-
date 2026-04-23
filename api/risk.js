module.exports = (req, res) => {

  const load = 680;
  const risk = {
    level: "LOW"
  };

  if (load > 600) risk.level = "MEDIUM";
  if (load > 650) risk.level = "HIGH";
  if (load > 700) risk.level = "CRITICAL";

  res.status(200).json(risk);
};
