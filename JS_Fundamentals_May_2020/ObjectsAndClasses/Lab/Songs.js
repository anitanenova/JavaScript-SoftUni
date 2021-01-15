function solve(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let n = input.shift();
  let typeListName = input.pop();

  let songs = [];

  for (let i = 0; i < n; i++) {
    let [typeList, name, time] = input[i].split("_");

    let song = new Song(typeList, name, time);

    if (typeListName == typeList || typeListName == "all") {
      songs.push(song);
    }
  }

  for (const song of songs) {
    console.log(song.name);
  }
}

console.log(
  solve([
    3,
    "favourite_DownTown_3:14",
    "favourite_Kiss_4:16",
    "favourite_Smooth Criminal_4:01",
    "favourite",
  ])
);
