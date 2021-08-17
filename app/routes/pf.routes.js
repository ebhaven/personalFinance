module.exports = app => {
    const tradebook = require("../controllers/tradebook.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Entry
    router.post("/", tradebook.create);
  
    // Retrieve all Entries
    router.get("/", tradebook.findAll);
  
    // Retrieve all published data
    router.get("/published", tradebook.findAllPublished);
  
    // Retrieve a single entry with id
    router.get("/:id", tradebook.findOne);
  
    // Update a Entry with id
    router.put("/:id", tradebook.update);
  
    // Delete a Entry with id
    router.delete("/:id", tradebook.delete);
  
    // Delete all Entries
    router.delete("/", tradebook.deleteAll);
  
    app.use('/api/tradebook', router);
  };