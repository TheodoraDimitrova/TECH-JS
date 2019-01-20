function solve(band,album,songName){
    let songDuration=(album.length * band.length) * songName.length / 2;
    console.log(`The plate was rotated ${Math.ceil(songDuration/2.5)} times.`)
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')