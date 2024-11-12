const Produto = require("../models/Produto.js");
const db = require("../database/db.js")

const getAllFetes = async (req, res) => {
 try {
    if(req.params.stringSearch != null) {
      keySearch=req.params.stringSearch;
      const fetesList = await Produto.find({produto: {$regex: keySearch}}).sort({ produto: 1 });
      
      return res.render("index", { fetesList, produto: null });
      
    }
    const fetesList = await Produto.find().sort({ produto: 1 });
    return res.render("index", { fetesList, produto: null });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const fetes = await Produto.findOne({ _id: req.params.id });
    const fetesList = await Produto.find().sort({ produto: 1 });
    return res.render("teste", { fetes, fetesList });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneFetes = async (req, res) => {
  try {
    const fetes = req.body;
    console.log(fetes);
    if (req.params.method == "update") {
      await Produto.updateOne({ _id: req.params.id }, fetes);
    } else {
      await Produto.deleteOne({ _id: req.params.id });
    }
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createFetes = async (req, res) => {
  const fetes = req.body;

 
 try {
    
    await Produto.create(ts);
    return res.redirect("teste.ejs");
    
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const fetesDelete = async (req, res) => {
  return res.redirect("/");
};


const getSearchProdutos = async (req, res) => {
  try {
    keySearch=req.params.stringSearch;
    const fetesList = await Produto.find({produto: {$regex: keySearch}}).sort({ produto: 1 });
    
    return res.json(fetesList); //res.render("index", { fetesList, produto: null });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllFetes,
  getById,
  createFetes,
  fetesDelete,
  updateOneFetes,
  getSearchProdutos,
};
