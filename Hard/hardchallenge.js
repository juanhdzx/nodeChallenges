const express = require("express");
const data = require("./database.json");

const app = express();

app.get("/", (req, res) => {
    res.send(employees);
})

app.get("/:id", (req, res) => {
    const findEmp = data.employees.find(name); {
        return parseInt(req.params.id) === employees.id;
    }

    if(!findEmp) {
        return res.status(404).send("Could not find this person");
    }

    res.send(findEmp);
});

app.listen(3000, () => {
    console.log("We listening...");
});