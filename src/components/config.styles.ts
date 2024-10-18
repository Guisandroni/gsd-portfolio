import styled from "styled-components";


export const AboutContainer = styled.section`
    
    display:flex;
    justify-content:space-evenly;
    margin-top: 3rem;
    
`




export const HeaderContainer = styled.header`
    background-color:#141301;
    display:flex;
    color:#f1f1f1;
    justify-content: space-evenly;
    align-items:center;
    height:4.5rem;
    
    ul{
        display:flex;
        gap: 4rem;

    
    }

    ul li {
        list-style: none;

    }
`


export const AboutProfileDescription = styled.div`
    height: 8rem;
    width: 30rem;
    padding: 1rem;
    color:#141301;
    font-weight:bold;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;


`


export const AboutPhoto = styled.div `
    
    display:flex;
    flex-direction:column;
    gap:1rem;
    justify-content:center ;
    align-items:center ;

    div{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    div img{
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        border-style: none;
    }

    p{
        font-size: 1rem;
        font-weight:bold;
        color:#141301;
    }
`



export const TecContainer = styled.main`
  display:flex;
  margin-top: 4rem;
  flex-direction: column;
    
    gap:2rem;
   justify-content:center ;
   align-items: center; 


    ul{
        display:flex;
        gap: 2rem;

    }

    ul li{
        list-style: none;
    }

    div{
        display:flex    ;
        flex-direction:column;
        gap:2rem;
        width:100vh;
        justify-content:center;
        align-items:center;

    }
   
`

export const CenterTec = styled.div`
 border-radius: 8px;
 padding: 1rem;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

`


export const ProjectContainer = styled.section`
display:flex;
justify-content:center;
margin-top: 4rem;
flex-direction: column;
align-items:center;



`
export const SeparedContainer = styled.div`

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding:1rem;
    border-radius:8px;
    text-align:center;
    margin-bottom:0.5rem;
    display:flex;
    flex-direction:column;
    gap:2rem;


`
export const Container = styled.div`

width: 100vh;
display: flex;
gap: 2rem;
justify-content:center;
align-items:center;
flex-wrap:wrap;
border-radius: 8px;
padding-bottom:2rem;
div{
    background-color:#001219;
    width: 12rem;
    height:12rem;
    border-radius: 8px;
    justify-content: center;
    align-items:center;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
    color: #fff;

}

div a {
    text-decoration: none;
    color: #fff;
}
`