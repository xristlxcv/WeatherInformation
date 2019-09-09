// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || "World";
    return {
      statusCode: 200,
      body: JSON.stringify({
        image1: "https://thumbs.gfycat.com/FlawedDistantBrocketdeer-small.gif",
        image2: "https://media1.giphy.com/media/l1J9w4UPRtjZtPsA0/source.gif",
        image3: "https://i.giphy.com/media/h7Y3rfqV9qADYcOJaD/giphy.webp",
        image4: "https://media.giphy.com/media/3ov9jKZB8L20lRqW52/giphy.gif"
      })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
