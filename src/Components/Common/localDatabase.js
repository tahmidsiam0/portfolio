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
        name: "Shopping Mania",
        description: "Shopping Mania is a demo website of a professional E-Commerce based businesses. It should've some functionalities which can be achieved.",
        responsive: true,
        liveLink: "https://tahmidsiam0.github.io/shoppingmania/",
        github: "https://github.com/tahmidsiam0/shoppingmania"
    },
    {
        name: "Marriage Media",
        description: "Marriage Media is a demo website of a professional wedding related businesses.",
        responsive: true,
        liveLink: "https://tahmidsiam0.github.io/marriagemedia/",
        github: "https://github.com/tahmidsiam0/marriagemedia"
    },
    {
        name: "Happy Coaching",
        description: "Happy Coaching is a demo website of a professional coaching related businesses.",
        responsive: true,
        liveLink: "https://tahmidsiam0.github.io/happy_coaching/",
        github: "https://github.com/tahmidsiam0/happy_coaching"
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