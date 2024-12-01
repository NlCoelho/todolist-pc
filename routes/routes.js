const routes = require("express").Router();
const FetesController = require("../controller/FetesController");

routes.get("/", FetesController.getAllFetes);
routes.post("/create", FetesController.createFetes);
routes.post("/updateOne/:id", FetesController.updateOneFetes);
routes.get("/delete", FetesController.fetesDelete);
routes.get("/getById/:id/:method", FetesController.getById);
routes.get("/searchProdutos/:stringSearch", FetesController.getSearchProdutos);
routes.get("/disco", FetesController.getAllDisco);
routes.get("/mola", FetesController.getAllMola);
routes.get("/teste", FetesController.getTeste);
routes.get("/srcoelho", FetesController.getSrcoelho);

module.exports = routes;
