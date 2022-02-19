// タイマー部
let stop;
let progress;
let addition = 0;
const record = document.querySelector(".counter");
// カウンター
function timer() {
const start = new Date().getTime();
stop = setInterval(function() {
progress = new Date().getTime() - start + addition;
const noms = progress / 1000;
const millisecond = progress ? ("0" + String(noms).split(".")[1]).slice(-1) : "0";
const nos = Math.trunc(noms);
const second = nos ? ("0" + (nos % 86400 % 3600 %60)).slice(-2) : "0";
const minute = nos >= 60 ? ("0" + Math.trunc(nos % 86400 % 3600 / 60)).slice(-2) : "0";
const hour = nos >= 360 ? ("0" + Math.trunc(nos % 86400 / 3600)).slice(-2) : "0";
if (progress < 86400) {
record.textContent = hour + ":" + minute + ":" + second + ":" + millisecond; } else {
record.textContent = "0:0:0:0"; clearInterval(stop); }}, 10); }
// ボタン部
const startButton = document.querySelector("button.start");
const stopButton = document.querySelector("button.stop");
const resetButton = document.querySelector("button.reset");
stopButton.disabled = true; resetButton.disabled = true;
// スタート
startButton.addEventListener("click", function() {
progress = 0; timer(); startButton.disabled = true; stopButton.disabled = false; resetButton.disabled = false; });
// ストップ
stopButton.addEventListener("click", function() {
clearInterval(stop); addition = progress; startButton.disabled = false; stopButton.disabled = true; resetButton.disabled = false; });
// リセット
resetButton.addEventListener("click", function() {
clearInterval(stop); progress = 0; record.textContent = "0:0:0:0"; addition = 0; startButton.disabled = false; stopButton.disabled = true; resetButton.disabled = true; });