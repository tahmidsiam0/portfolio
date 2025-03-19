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

export { snippetData, snippetCustomStyle }