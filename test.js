async function game() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Chargeuprepository/temp-OEM-data/refs/heads/master/data.json"
  );
  const ans = await res.json();

  console.log(ans);
}
game();
