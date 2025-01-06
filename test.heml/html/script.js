document.getElementById("submit-btn").addEventListener("click", function () {
   
   
   
    const answers = {
        q1: ["<h1>","<p>"], // テキスト用タグの正解
        q4: ["<p>","<h1>"], // 別のテキスト用タグ
        q2: "<a>", // リンク用タグ
        q3: "<img>" // 画像用タグ
    };

    let score = 0;
    let totalQuestions = 4;

    // Q1の回答
    const q1Answer = document.getElementById("q1").value.trim();
    if (answers.q1.includes(q1Answer)) {
        score++;
    }

    // Q4の回答
    const q4Answer = document.getElementById("q4").value.trim();
    if (answers.q4.includes(q4Answer)) {
        score++;
    }

    // Q2の回答
    const q2Answer = document.getElementById("q2").value.trim();
    if (q2Answer === answers.q2) {
        score++;
    }

    // Q3の回答
    const q3Answer = document.getElementById("q3").value.trim();
    if (q3Answer === answers.q3) {
        score++;
    }

    // 結果を表示
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `あなたのスコアは ${score}/${totalQuestions} 点です。`;

    if (score === totalQuestions) {
        resultDiv.style.color = "green";
        resultDiv.innerHTML += " 素晴らしい！全問正解です！";
    } else if (score >= totalQuestions / 2) {
        resultDiv.style.color = "orange";
        resultDiv.innerHTML += " よくできました。もう少し頑張りましょう！";
    } else {
        resultDiv.style.color = "red";
        resultDiv.innerHTML += " 頑張って復習しましょう。";
    }
});