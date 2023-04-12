document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // サーバー契約時以下のコードを有効化
    // fetch("/contact", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ name, email, message })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert("お問い合わせが送信されました。ありがとうございます！");
    //     } else {
    //         alert("問題が発生しました。もう一度お試しください。");
    //     }
    // });

    alert("名前: " + name + "\nメールアドレス: " + email + "\nメッセージ: " + message);
});
