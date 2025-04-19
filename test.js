async function game() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Chargeuprepository/temp-OEM-data/refs/heads/master/data.json?timestamp=" +
      new Date().getTime()
  );
  const ans = await res.json();

  console.log(ans);
}
game();
