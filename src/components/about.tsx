import { AboutContainer, AboutPhoto, AboutProfileDescription } from "./config.styles";


export function About(){
    return (
        <>
            <AboutContainer>
            <AboutPhoto>
                <div><img src="https://github.com/Guisandroni.png" alt="" /></div>
              
                <p>Desenvolvedor Full Stack</p>
            </AboutPhoto>

            <AboutProfileDescription>
            <p>Formação adas fatec sorocaba ...</p>
            </AboutProfileDescription>

            </AboutContainer>
        </>
    )
}