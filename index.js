const express = require('express');
const summarizeText = require('./summarize.js');
const app = express();
const port = 3000;

// Parses JSON bodies (as sent by API clients)
app.use(express.json());




app.post('/summarize' , (req,res)=>{
  // handle summarize endpoint
    const text = req.body.text_to_summarize;

   // call your summarizeText function, passing in the text from the request
    summarizeText(text) 
      .then(response => {
         res.send(response); // Send the summary text as a response to the client
      })
      .catch(error => {
        console.log(error.message);
      });
})

app.use(express.static('public'))
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
