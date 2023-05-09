const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

async function callGpt(text) {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
    });
    console.log(completion.data.choices[0].text);
  } catch (ex) {
    throw ex;
  }
}

callGpt("where is nigeria located");
