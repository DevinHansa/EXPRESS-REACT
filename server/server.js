const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get('api/youtube', (req, res) => {
    res.json({ like: "like the video", subscribe: "subscribe to the channel" })
})

const port = 8000;

app.listen(port, () => {
    console.log(`Server is started running on port ${port}`);

});