function calculateIST(userAnswers) {
  let rawScores = {
    SE: 0, WA: 0, AN: 0, GE: 0, RA: 0, ZR: 0, FA: 0, WU: 0, ME: 0
  };
  let totalRW = 0;

  if (typeof IST_DATA === "undefined") return { rawScores, totalRW };

  IST_DATA.forEach(subtest => {
    let subtestRW = 0;
    const answers = userAnswers[subtest.id] || {};

    subtest.questions.forEach((q, idx) => {
      const userRaw = answers[idx];
      if (userRaw === undefined || userRaw === null || userRaw === "") return;

      // 1. PENSKORAN KHUSUS GE (Skor 2, 1, 0)
      if (subtest.id === "GE") {
        const strAns = userRaw.toString().trim().toLowerCase();
        const list2 = q.score2 || q.key2 || [];
        const list1 = q.score1 || q.key1 || [];

        const isScore2 = list2.some(k => strAns.includes(k.toLowerCase()));
        const isScore1 = list1.some(k => strAns.includes(k.toLowerCase()));

        if (isScore2) {
          subtestRW += 2;
        } else if (isScore1) {
          subtestRW += 1;
        }
      } 
      // 2. PENSKORAN KHUSUS RA (Digit Selector)
      else if (subtest.id === "RA" || subtest.type === "digit_select") {
        if (Array.isArray(userRaw) && q.digits) {
          const sortedUser = [...userRaw].map(Number).sort((a, b) => a - b);
          const sortedKey = [...q.digits].map(Number).sort((a, b) => a - b);

          const isMatch = sortedUser.length === sortedKey.length &&
                          sortedUser.every((val, i) => val === sortedKey[i]);
          if (isMatch) subtestRW += 1;
        } else {
          // Fallback jika jawaban tersimpan dalam format teks
          const userStr = userRaw.toString().trim();
          if (userStr === q.key) subtestRW += 1;
        }
      }
      // 3. PENSKORAN SUBTES LAINNYA (Biner 1 dan 0: MC & ZR)
      else {
        const userStr = userRaw.toString().trim().toLowerCase();
        const keyStr = q.key ? q.key.toString().trim().toLowerCase() : "";
        if (userStr === keyStr) {
          subtestRW += 1;
        }
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
