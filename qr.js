// QR Code Scanner
const output = document.getElementById("output");

function onScanSuccess(decodedText, decodedResult) {
  output.innerText = decodedText;
  html5QrcodeScanner.clear();
}

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", { fps: 10, qrbox: 250 }
);
html5QrcodeScanner.render(onScanSuccess);

// QR Code Generator
function generateQRCode() {
  const qrText = document.getElementById("qrText").value;
  const qrcodeContainer = document.getElementById("qrcode");

  qrcodeContainer.innerHTML = ""; // clear previous
  new QRCode(qrcodeContainer, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}
