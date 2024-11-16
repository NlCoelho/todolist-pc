const routes = require("express").Router();
const FetesController = require("../controller/FetesController");

routes.get("/:stringSearch?", FetesController.getAllFetes);
routes.post("/create", FetesController.createFetes);
routes.post("/updateOne/:id", FetesController.updateOneFetes);
routes.get("/delete", FetesController.fetesDelete);
routes.get("/getById/:id/:method", FetesController.getById);
routes.get("/searchProdutos/:stringSearch", FetesController.getSearchProdutos);


module.exports = routes;
