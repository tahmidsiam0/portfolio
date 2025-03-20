const snippetData = `const Developer = () => {
    const [openToWork, setOpenToWork] = useState(true);
    return  <div> 
                <Experience>Fresher</Experience>
                <Project count="10+" />
            </div>
};`;

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
    mailBody: "Hello Tahmid, I want to talk to you about some potential collaboration..."
};


export { snippetData, snippetCustomStyle, personalInfo }