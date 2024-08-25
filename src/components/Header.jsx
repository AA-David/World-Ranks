import bg from "../images/Hero.jpg";
import logo from "../images/Logo.svg"

export default function Header() {
    return (
        <section className="bg-cover bg-no-repeat bg-center pt-36 h-72" style={{backgroundImage:`url(${bg})`}}>
            <img className="mx-auto" src={logo} alt="World Ranks logo"/>
        </section>
    )
}