async function game() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Chargeuprepository/temp-OEM-data/master/data.json?cache_bust=" +
      Date.now()
  );
  const ans = await res.json();
  console.log(ans);
}
game();
