function calculateIST(userAnswers) {
  let rawScores = {
    SE: 0, WA: 0, AN: 0, GE: 0, RA: 0, ZR: 0, FA: 0, WU: 0, ME: 0
  };
  let totalRW = 0;

  IST_DATA.forEach(subtest => {
    let subtestRW = 0;
    const answers = userAnswers[subtest.id] || {};

    subtest.questions.forEach((q, idx) => {
      let userAnswer = answers[idx] ? answers[idx].toString().trim().toUpperCase() : "";
      let correctAnswer = q.key ? q.key.toString().trim().toUpperCase() : "";

      if (userAnswer === correctAnswer) {
        subtestRW += 1;
      }
    });

    rawScores[subtest.id] = subtestRW;
    totalRW += subtestRW;
  });

  return {
    rawScores: rawScores,
    totalRW: totalRW
  };
}