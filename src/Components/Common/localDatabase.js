import shopping_mania from '../../assets/Images/shopping_mania.png';
// import marriage_media from '../../assets/Images/marriage_media.png';
import happy_coaching from '../../assets/Images/happy_coaching.png';
import towerOfHanoi from '../../assets/Images/towerOfHanoi.png';
import memoryCardGame from '../../assets/Images/memoryCardGame.png';
import hangman from '../../assets/Images/hangman.png';
import game_2048 from '../../assets/Images/2048.png';

const snippetCustomStyle = {
    color: "grey",
    borderRadius: "7px",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    fontStyle: "italic",
    fontSize: "15px",
    padding: "5px",
    margin: 0,
};

const personalInfo = {
    mail: "tahmid.frontdev@gmail.com",
    cell1: "+8801736373595",
    cell2: "+8801925403896",
    address: "House 30, Road 03, Nikunja 02, Dhaka 1229",
    subject: "Potential collaboration",
    mailBody: "Hello Tahmid, I want to talk to you about some potential collaboration...",
};

const workData = [
    {
        name: "2048",
        description: "2048 is a simple game where user have to play an addition game. Add and keep the blocks free/empty to achieve highest score.",
        responsive: false,
        liveLink: "https://tahmidsiam0.github.io/2048_game/",
        github: "https://github.com/tahmidsiam0/2048_game",
        img: game_2048,
        technologies: ["html", "css", "javascript"]
    },
    {
        name: "Shopping Mania",
        description: "Shopping Mania is a demo website of a professional E-Commerce based businesses. It should've some functionalities which can be achieved.",
        responsive: true,
        liveLink: "https://tahmidsiam0.github.io/shoppingmania/",
        github: "https://github.com/tahmidsiam0/shoppingmania",
        img: shopping_mania,
        technologies: ["html", "bootstrap", "javascript", "jquery"]
    },
    {
        name: "Hangman",
        description: "Hangman is a simple game where user have to guess the word with the help of hint, otherwise the avatar will hang.",
        responsive: false,
        liveLink: "https://tahmidsiam0.github.io/hangman/",
        github: "https://github.com/tahmidsiam0/hangman",
        img: hangman,
        technologies: ["html", "css", "javascript"]
    },
    // {
    //     name: "Marriage Media",
    //     description: "Marriage Media is a demo website of a professional wedding related businesses.",
    //     responsive: true,
    //     liveLink: "https://tahmidsiam0.github.io/marriagemedia/",
    //     github: "https://github.com/tahmidsiam0/marriagemedia",
    //     img: marriage_media,
    // },
    {
        name: "Tower of Hanoi",
        description: "Tower of Hanoi is a simple game where user have to organize cards/bubbles according to size.",
        responsive: false,
        liveLink: "https://tahmidsiam0.github.io/towerOfHanoi/",
        github: "https://github.com/tahmidsiam0/towerOfHanoi",
        img: towerOfHanoi,
        technologies: ["html", "css", "javascript"]
    },
    {
        name: "Happy Coaching",
        description: "Happy Coaching is a demo website of a professional coaching related businesses.",
        responsive: true,
        liveLink: "https://tahmidsiam0.github.io/happy_coaching/",
        github: "https://github.com/tahmidsiam0/happy_coaching",
        img: happy_coaching,
        technologies: ["html", "css", "javascript", "bootstrap"]
    },
    {
        name: "Memory Card Game",
        description: "Memory Card Game is a simple game where user have to remember symbols/icons in a creative way.",
        responsive: false,
        liveLink: "https://tahmidsiam0.github.io/memoryCardGame/",
        github: "https://github.com/tahmidsiam0/memoryCardGame",
        img: memoryCardGame,
        technologies: ["html", "css", "javascript"]
    },
]

const snippetData = `const Developer = () => {
    const [openToWork, setOpenToWork] = useState(true);
    return  <div> 
                <Experience>Fresher</Experience>
                <Project count="10+" />
            </div>
};`;


export { snippetData, snippetCustomStyle, personalInfo, workData }