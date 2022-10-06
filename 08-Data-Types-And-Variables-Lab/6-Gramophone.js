// Data Types and Variables - Lab
// 06. Gramophone

function gramophone(band, album, song) {
  // 1 rotation = 2.5 sec

  let bandLength = Number(band.length);
  let albumLength = Number(album.length);
  let songLength = Number(song.length);

  let duration = (albumLength * bandLength * songLength) / 2;

  let rotation = Math.ceil(duration / 2.5);

  console.log(`The plate was rotated ${rotation} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
