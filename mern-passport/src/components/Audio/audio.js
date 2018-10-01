

const sound = function (name) {
    const test = testAudio.mp3;
    var audio = new Audio(name);
    audio.play(name);   
    
}

// render() {
//     return (
//       <Sound
//         url= {this.Name} || "cool_sound.mp3"
//         playStatus={Sound.status.PLAYING}
//         playFromPosition={300 /* in milliseconds */}
//         onLoading={this.handleSongLoading}
//         onPlaying={this.handleSongPlaying}
//         onFinishedPlaying={this.handleSongFinishedPlaying}
//       />
//     );
//   }

export default audio;