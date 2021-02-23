function solve(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let [town, latitude, longitude] = arr[i].split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    let currentTown = {
      town,
      latitude,
      longitude,
    };

    console.log(currentTown);
  }
}
