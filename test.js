async function game() {
  const res = await fetch(
    "https://cdn.jsdelivr.net/gh/Chargeuprepository/temp-OEM-data/data.json"
  );
  const ans = await res.json();

  console.log(ans);
}
game();
