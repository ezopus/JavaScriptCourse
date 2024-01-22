"use strict";

function songFilter(songs) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  const number = songs.shift();
  const songType = songs.pop();

  const result = songs
    .map((songInput) => {
      const [name, type, time] = songInput.split("_");
      return new Song(name, type, time);
    })
    .filter((song) => {
      if (songType === "all") return song;
      return song.type === songType;
    })
    .map((song) => song.name)
    .join("\n");

  console.log(result);
}

songFilter([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

songFilter([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
