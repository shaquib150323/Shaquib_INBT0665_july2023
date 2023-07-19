const music = new Audio('audio/1.mp3');
//music.play();
const songs = [
    {
        id: "1",
        songName: `On my way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpg"
    },
    {
        id: "2",
        songName: `Alan Walker-Fade <br> <div class="subtitle">Alan Walker</div>`,
        poster: "images/2.jpg"
    }, {
        id: "3",
        songName: `Cartoon- on and on<br> <div class="subtitle">Daniel Levi</div>`,
        poster: "images/3.jpg"
    }, {
        id: "4",
        songName: `Warriyo - Mortals<br> <div class="subtitle">Mortals</div>`,
        poster: "images/4.jpg"
    }, {
        id: "5",
        songName: `Ertugul Ghazi<br> <div class="subtitle">Ertugul</div>`,
        poster: "images/5.jpg"
    }, {
        id: "6",
        songName: `Electronic Music <br> <div class="subtitle">Electror</div>`,
        poster: "images/6.jpg"
    }, {
        id: "7",
        songName: `Agar tum sath ho <br> <div class="subtitle">Tamashaa</div>`,
        poster: "images/7.jpg"
    }, {
        id: "8",
        songName: `Suna hai<br> <div class="subtitle">Neha Kakkar</div>`,
        poster: "images/8.jpg"
    }, {
        id: "9",
        songName: `Tere sang yaara <br> <div class="subtitle">Atif Aslam</div>`,
        poster: "images/9.jpg"
    }, {
        id: "10",
        songName: `Duniyan<br> <div class="subtitle">Luka Chuppi</div>`,
        poster: "images/10.jpg"
    }, {
        id: "11",
        songName: `Lagdi lahore di<br> <div class="subtitle">Street Dancer</div>`,
        poster: "images/11.jpg"
    }, {
        id: "12",
        songName: `Putt jatt da <br> <div class="subtitle">Putt jatt da</div>`,
        poster: "images/12.jpg"
    }, {
        id: "13",
        songName: `Baarishein<br> <div class="subtitle">Atif Aslam</div>`,
        poster: "images/13.jpg"
    }, {
        id: "14",
        songName: `Vaaste<br> <div class="subtitle">Dhwani Bhanushali</div>`,
        poster: "images/14.jpg"
    }, {
        id: "15",
        songName: `Lut gaye <br> <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/15.jpg"
    }, {
        id: "16",
        songName: `Meri zindagi hai tu <br> <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/16.jpg"
    }, {
        id: "17",
        songName: `Batao yaad hai tumko v jab dil ko churaya tha <br> <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster: "images/17.jpg"
    }, {
        id: "18",
        songName: `Mere dhol judaiyan <br> <div class="subtitle">Ali Sethi </div>`,
        poster: "images/18.jpg"
    }, {
        id: "19",
        songName: `Eh unde pagal ne sare<br> <div class="subtitle">Ap Dhillon</div>`,
        poster: "images/19.jpg"
    }, {
        id: "20",
        songName: `Vande Mataram <br> <div class="subtitle">Bankim Chandra Chatterji</div>`,
        poster: "images/20.jpg"
    },{
        id: "21",
        songName: `Dilbar Dilbar <br> <div class="subtitle">Neha Kakkar</div>`,
        poster: "images/21.jpg"
    },


]

Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

}
);

main_play = document.getElementById('main_play');
dance = document.getElementById('dance');


main_play.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        dance.classList.add('active1');
        main_play.classList.remove('bi-play-fill');
        main_play.classList.add('bi-pause-fill');
    } else {
        music.pause();
        dance.classList.remove('active1');
        main_play.classList.add('bi-play-fill');
        main_play.classList.remove('bi-pause-fill');
    }
});



const make_play = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('fa-circle-play');
        el.classList.remove('bi-pause-circle');
    })
}

const make_bg = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((el) => {
        el.style.background = 'rgb(24, 211, 14, .0)';
    })
}


let index = 0;
let poster_play_control = document.getElementById('poster_play_control');
let download_music = document.getElementById('download_music');

let title = document.getElementById('title');

//checking functionality with console  
/*console.log(index);
index++;*/
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_play_control.src = `images/${index}.jpg`;
        music.play();
        main_play.classList.remove('bi-play-fill');
        main_play.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`
        //song titles setting
        let songmaintitles = songs.filter((els) => {
            return els.id == index;

        });

        songmaintitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        });
        make_bg();
        Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(24, 211, 14, .1)";
        make_play();
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('bi-pause-circle');
        dance.classList.add('active1');
});
})
let currenttime = document.getElementById('currenttime');
let endtime = document.getElementById('endtime');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    if(sec1<10){
        sec1= `0${sec1}`;
    }
    endtime.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr %60);
    if(sec2<10){
        sec2= `0${sec2}`;
    }
    currenttime.innerText= `${min2}:${sec2}`;

let progress_bar = parseInt((music_curr / music_dur)* 100);
seek.value=progress_bar;
let seekbar = seek.value;
bar2.style.width = `${seekbar}%`;
dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
});

let vol_icon = document.getElementById('vol_icon');
let vol= document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
let vol_con = vol.value;
vol_bar.style.width = `${vol_con}%`;
vol_dot.style.left = `${vol_con}%`;
music.volume = vol_con/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    //////////////////////////////
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_play_control.src = `images/${index}.jpg`;
    music.play();
    main_play.classList.remove('bi-play-fill');
    main_play.classList.add('bi-pause-fill');
    //song titles setting
    let songmaintitles = songs.filter((els) => {
        return els.id == index;

    });

    songmaintitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    make_bg();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(24, 211, 14, .1)";
    make_play();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('bi-pause-circle');
    dance.classList.add('active1');

})

next.addEventListener('click', ()=>{
index ++;
if (index >Array.from(document.getElementsByClassName('songitem')).length) {
  index = 1;  
}
music.src = `audio/${index}.mp3`;
    poster_play_control.src = `images/${index}.jpg`;
    music.play();
    main_play.classList.remove('bi-play-fill');
    main_play.classList.add('bi-pause-fill');
    //song titles setting
    let songmaintitles = songs.filter((els) => {
        return els.id == index;

    });

    songmaintitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    make_bg();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(24, 211, 14, .1)";
    make_play();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('bi-pause-circle');
    dance.classList.add('active1');
})





let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let song_cards = document.getElementsByClassName('song_cards')[0];

pop_song_right.addEventListener('click', () => {
    song_cards.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    song_cards.scrollLeft -= 330;
});
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let items = document.getElementsByClassName('items')[0];

pop_art_right.addEventListener('click', () => {
    items.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    items.scrollLeft -= 330;
});


