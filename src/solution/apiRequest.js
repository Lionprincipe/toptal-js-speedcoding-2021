const request = require('request');
const runTask = (data, entryId, callback) => {
  const tests = data.nextTask.tests_json;
  const results = Object.fromEntries(
    Object.entries(tests).map(([key, value]) => [key, value.result])
  );
  request.post(`https://speedcoding.toptal.com/webappApi/entry/${entryId}/attemptTask`, {
    form: {
      attempt_id: data.attemptId,
      tests_json: JSON.stringify(results),
    },
  }, (error, res, body) => {
    if (error) throw error;
    const next = JSON.parse(body).data
    if (next.isChallengeEntryFinished) {
      callback(next)
      return
    }
    runTask(next, entryId, callback)
  });
}
// {
//   challengeSlug: 'toptal-js-2021',
//     email: 'lionprincipe@gmail.com',
//       leaderboardName: "Lionel",
//         isConfirmedToBeContacted: true,
//           isTermsAndConditionsChecked: Ce ? 1 : 0,
//             countryAlpha2: fe && fe.value ? fe.value : '',
//                   }
const runEntry = (callback) => {
  request.post('https://speedcoding.toptal.com/webappApi/entry', {
    form: {
      challengeSlug: 'toptal-js-2021',
      email: "lionprincipe@hotmail.com",
      leaderboardName: 'Lionel',
      isConfirmedToBeContacted: 1,
      countryAlpha2: "DE",
    },
  }, (error, res, body) => {
    if (error) throw error;
    const {
      data
    } = JSON.parse(body);
    const entryId = data.entry.id
    runTask(data, entryId, callback)
  });
}
runEntry(console.log)





fetch('https://speedcoding.toptal.com/webappApi/entry', {
  form: {
    challengeSlug: 'toptal-js-2021',
    email: "lionprincipe@hotmail.com",
    leaderboardName: 'Lionel',
    isConfirmedToBeContacted: 1,
    countryAlpha2: "DE",
  },
}).then(response => response.body)
  .then(rb => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then(({ done, value }) => {
            // If there is no more data to read
            if (done) {
              console.log('done', done);
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            console.log(done, value);
            push();
          })
        }

        push();
      }
    });
  })
  .then(stream => {
    // Respond with our stream
    return new Response(stream, { headers: { "Content-Type": "multipart/form-data" } }).text();
  })
  .then(result => {
    // Do things with result
    console.log(result);
  });