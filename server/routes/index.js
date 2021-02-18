import express from ("express");

import router from express.router();

router.get("/", (req, res, next) => {
  res.json({ test: "test" });
});

module.exports = router;
