// declare the 404 function
const handleFourOhFour = (req, res) => {
    res.status(404).send("I couldn't find what you're looking for.");
};

const homepage = (req, res) => {
    res.status(200).send("homepage");
};

module.exports = { handleFourOhFour, homepage };

