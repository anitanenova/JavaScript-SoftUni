function solve(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  const n = arr.shift();
  const typeList = arr.pop();

  let songs = [];

  for (let i = 0; i < n; i++) {
    let [typeList, name, time] = arr[i].split("_");

    songs.push(new Song(typeList, name, time));
  }

  let result = "";

  for (const song of songs) {
    if (typeList === "all") {
      result += `${song.name}\n`;
    } else {
      if (typeList == song.typeList) {
        result += `${song.name}\n`;
      }
    }
  }
  return result;
}
