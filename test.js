async function game() {
  const res = await fetch("https://temp-oem-data.vercel.app/data.json");
  const ans = await res.json();
  console.log(ans);
}
game();
