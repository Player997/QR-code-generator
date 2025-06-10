const generateBtn = document.getElementById('generate');
const downloadBtn = document.getElementById('download');
const qrContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
  const input = document.getElementById('text').value;
  qrContainer.innerHTML = '';

  if (input.trim() === '') return;

  QRCode.toCanvas(input, { width: 200 }, (err, canvas) => {
    if (err) return console.error(err);
    canvas.style.animation = 'bounceIn 0.4s ease';
    qrContainer.appendChild(canvas);
    downloadBtn.style.display = 'inline-block';
  });
});

downloadBtn.addEventListener('click', () => {
  const canvas = qrContainer.querySelector('canvas');
  const link = document.createElement('a');
  link.href = canvas.toDataURL();
  link.download = 'qr-code.png';
  link.click();
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
