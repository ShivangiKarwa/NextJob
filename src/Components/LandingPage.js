export default function LandingPage() {
    return <div className="landing-page">
        <AboutUs/>
        <Features/>
    </div>
}

function AboutUs() {

    return <>

        {/* <span>
            I am the about us section
        </span> */}
        <div className="flex about-us text-center items-center bg-landingContent">
            <AboutUsContent/>
            <LoginCard/>
        </div>

    </>

}

function Features() {

   return <span>
        I am the features section
    </span>

}

function AboutUsContent() {
    return <div>
        I am the about us content
    </div>
}

function LoginCard(){

    return <div className="bg-headerBlue h-3/4 w-2/4 m-auto rounded-lg text-white">
        <span>
            I am the login card
        </span>
    </div>
}