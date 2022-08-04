const styleImg= {
    width: "30%",
    height: "30%",
    borderCollapse: "separate",
    borderSpacing: "5px",
    // background: '#1B1E1E url("gradient.gif") bottom left repeat-x',

  }
export default function Home() {
   
    return (
        <div style={{background:"black"}} >

           <marquee><h1 style={{background:"white"}}><center> REACT PROYECT </center></h1></marquee>
            <img style={styleImg} src="https://www.pngkey.com/png/full/222-2224712_react-react-logo-png.png" alt="" />
            <br></br>
            <br></br>
        </div>
    );
}