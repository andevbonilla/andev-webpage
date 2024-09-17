import Image from "next/image";
import { City } from "@/components/City";
import { ContactForm } from "@/components/ui/ContactForm";
import { CuriosFact } from "@/components/CuriosFact";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components//ui/Navbar";
import { PicturesInBalloons } from "@/components/Pictures";
import { Project } from "@/components/ui/Project";
import { Skills } from "@/components/Skills";
import { StarsBackground } from "@/components/Stars";
import { TypingAnimation } from "@/components/TypingAnimation";
import {
  AngularSVG,
  AwsSVG,
  Css3SVG,
  Html5SVG,
  MongoDBSVG,
  NextJsSVG,
  NodejsSVG,
  ReactSVG,
  SocketIOSVG,
  TailwindSVG,
  WebRTCSVG
} from "@/utils/IconsSvgs";
import { useTranslations } from "next-intl";
import { Moon } from "@/components/Moon";
import { TitleSection } from "@/components/ui/TitleSection";
import { Anton } from "next/font/google";
import UnayMugreCarousel from "@/components/CarrouselUnaYMugre";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

export default function Home() {

  const imagesALtsI18n = useTranslations("Image-Alts");
  const curiosFactsI18n = useTranslations("Curios-Facts");

  const navbarI18n = useTranslations("Navbar");
  const occupationsI18n = useTranslations("Occupations");
  const aboutI18n = useTranslations("About");
  const businessI18n = useTranslations("Business");
  const unaymugreI18n = useTranslations("UnaYMugre");
  const skillsI18n = useTranslations("Skills");
  const projectsI18n = useTranslations("My-Projects");
  const contactI18n = useTranslations("Contact");

  return (

    <>

      <Navbar
        code={navbarI18n("code")}
        changeLenguageText={navbarI18n("changeLenguage")}
        projectAsteroid={navbarI18n("projectsAsteroid")}
        contactAsteroid={navbarI18n("contactAsteroid")}
        aboutAsteroid={navbarI18n("aboutAsteroid")}
        bussinessAsteroid={navbarI18n("bussinessAsteroid")}
      />

      <main className='overflow-x-hidden z-20 relative'>

        <PicturesInBalloons />

        <div className='gradient-background relative'>
          <StarsBackground>

            {/* simulate the navbar height */}
            <div className='h-16'></div>

            {/* presentation section */}
            <div className='md:px-[15%] lg:px-[20%] flex flex-col md:flex-row justify-center items-center h-screen px-[10%]'>

              <div className='mb-10 md:w-[50%]'>

                <h1 className={`text-white font-bold text-[2.6rem] xl:text-[3.2rem] ${anton.className}`}>
                  Andres Bonilla
                </h1>

                <div className='flex text-white'>
                  <TypingAnimation
                    stringList={[occupationsI18n("1"), occupationsI18n("2"), occupationsI18n("3"), occupationsI18n("4")]}
                    wrapper="h2"
                  />
                </div>

              </div>

              <div className='md:w-[50%] relative w-full h-[20rem] mt-[5rem] md:mb-[6rem] lg:mb-[12rem]'>
                <Image
                  src={require("@/assets/yo-en-el-tesla.webp")}
                  alt={imagesALtsI18n("andresTesla")}
                  width={350}
                  height={350}
                  className='absolute w-full floating'
                />
              </div>

            </div>

            {/* about me */}
            <section className='md:px-[20%] px-[10%]' id="about">

              <TitleSection
                text={aboutI18n("title")}
              />

              <p className='text-white text-center text-xl leading-10 text-opacity-80'>{aboutI18n("text1")}<a target='_blank' className='underline text-opacity-100 font-bold' href='https://fansive.netlify.app/#/login'>Fansive</a>{aboutI18n("text2")}<a target='_blank' className='underline text-opacity-100 font-bold' href='https://www.simpliterms.com'>Simpliterms</a>{aboutI18n("text3")}<a target='_blank' className='underline text-opacity-100 font-bold' href='https://info.movete.me'>Movete</a>.
              </p>

              <p className='mt-4 text-white text-center text-xl leading-10 text-opacity-80'>{aboutI18n("text4")}</p>

            </section>

            <CuriosFact
              meters={"384.000"}
              text={curiosFactsI18n("1")}
            />

            {/* moon part */}
            <Moon
              altMoon={imagesALtsI18n("moonPicture")}
            />

            {/* my business */}
            <section className='w-full z-30' id="business-part">

              <TitleSection
                text={businessI18n("title")}
              />

              {/* movete planet */}
              <div className='w-auto lg:flex lg:justify-between lg:items-center lg:mx-[16%]'>

                {/* when is in desktop */}
                <div className='lg:w-[55%] lg:block hidden'>

                  <h3 className='font-bold text-2xl text-white mx-[13%] lg:mx-0 mb-[2rem]'>Movete</h3>

                  <p className='text-white text-left text-lg text-opacity-90 leading-10 mx-[13%] lg:mx-0 mb-8'>
                    {businessI18n("moveteDesc")}
                  </p>

                  <div className='px-[13%] lg:px-0 flex flex-col md:flex-row'>
                    <a
                      className='md:w-auto md:mb-0 mb-6 w-full text-center bg-yellow-200 py-3 px-6 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 hover:scale-110 transition-all mr-4'
                      href={"https://movete.me/andresbonilla"}
                      target='_blank'>
                      {businessI18n("myProfileMovete")}
                    </a>
                  </div>

                </div>

                <div className='lg:ml-12 lg:w-[45%] lg:mx-0 lg:h-[28rem] md:mx-[25%] flex items-center justify-center h-[20rem] mt-14 relative w-auto mx-[13%]'>
                  <Image
                    src={require("@/assets/movete-planet.webp")}
                    alt={imagesALtsI18n("movetePlanet")}
                    className='absolute floating w-[18rem] mb-[3rem]'
                  />
                </div>

                {/* when is in mobile */}
                <div className='lg:hidden'>

                  <h3 className='font-bold text-2xl text-white mx-[13%] lg:mx-0 mb-[2rem]'>Movete</h3>

                  <p className='text-white text-left text-lg text-opacity-90 leading-10 mx-[13%] lg:mx-0 mb-8'>
                    {businessI18n("moveteDesc")}
                  </p>

                  <div className='px-[13%] lg:px-0 flex flex-col md:flex-row'>
                    <a
                      className='md:w-auto md:mb-0 mb-6 w-full text-center bg-yellow-200 py-3 px-6 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 hover:scale-110 transition-all mr-4'
                      href={"https://movete.me/andresbonilla"}
                      target='_blank'>
                      {businessI18n("myProfileMovete")}
                    </a>
                  </div>
                </div>

              </div>

              {/* simplieterms planet */}
              <div className='w-auto lg:flex lg:justify-between lg:items-center lg:mx-[16%] mt-16'>

                <div className='lg:w-[40%] lg:mx-0 lg:h-[28rem] md:mx-[25%] flex items-center justify-center h-[20rem] mb-16 relative w-auto mx-[13%]'>
                  <Image
                    src={require("@/assets/simpliterms-planet.webp")}
                    alt={imagesALtsI18n("simplitermsPlanet")}
                    className='absolute w-auto floating'
                  />
                </div>

                <div className='lg:w-[60%] lg:ml-12'>

                  <h3 className='font-bold text-2xl text-white mx-[13%] lg:mx-0 mb-[2rem]'>Simpliterms</h3>

                  <p className='text-white text-left text-lg text-opacity-90 leading-10 mx-[13%] lg:mx-0 mb-8'>
                    {businessI18n("simplitermsDesc")}
                  </p>

                  <div className='px-[13%] lg:px-0 flex'>
                    <a
                      className='md:w-auto w-full text-center bg-yellow-200 py-3 px-6 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 hover:scale-110 transition-all'
                      href={"https://simpliterms.com"}
                      target='_blank'>
                      {businessI18n("viewMoreButton")}
                    </a>
                  </div>

                </div>
              </div>

            </section>

            {/* una y mugre */}
            <section className='md:px-[20%] px-[10%]'>
              <TitleSection
                text={unaymugreI18n("title")}
              />
              <p className="text-center text-white text-opacity-90 text-lg">{unaymugreI18n("desc")}</p>
              <UnayMugreCarousel />

              <div className='flex justify-center items-center'>
                <Link href={"https://www.instagram.com/mugre.fit/reels/"}
                  target='_blank'
                  title='instagram of Uña Y Mugre'>
                  <FontAwesomeIcon icon={faInstagram} className='text-white md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] mx-7' />
                </Link>
                <Link href={"https://www.tiktok.com/@unaymugre.fit"}
                  target='_blank'
                  title='tiktok of Uña Y Mugre'>
                  <FontAwesomeIcon icon={faTiktok} className='text-white md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] mx-7' />
                </Link>
                <Link href={"https://www.youtube.com/@U%C3%B1ayMugreFIT"}
                  target='_blank'
                  title='youtube of Uña Y Mugre'>
                  <FontAwesomeIcon icon={faYoutube} className='text-white md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] mx-7' />
                </Link>
              </div>

            </section>


            {/* my skills */}
            <section className='lg:px-[30%] px-[13%] mb-14'>
              <TitleSection
                text={skillsI18n("title")}
              />
              <Skills />
            </section>

            <CuriosFact
              meters={"400"}
              text={curiosFactsI18n("2")}
            />

            <section className='flex relative h-[5rem]'>
              <Image
                src={require("@/assets/space-station-icon.webp")}
                alt={imagesALtsI18n("InternationalSpaceStation")}
                className='international-space-station w-[30rem]'
                id='international-space-station'
              />
            </section>


            {/* my projects */}
            <section className="z-20" id='projects'>

              <TitleSection
                text={projectsI18n("title")}
              />

              <Project name={"YourDreamCar"}
                desc={projectsI18n("yourDreamCarDesc")}
                link={"https://www.yourdreamcar.ca/"}
                github={"https://github.com/andevbonilla/YourDreamCar"}
                imgUrl={"yourdreamcar-interface.webp"}
                buttonText={projectsI18n("viewButton")}
                iconList={[<Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <TailwindSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NextJsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Fansive"}
                desc={projectsI18n("fansiveDesc")}
                link={"https://fansive.netlify.app/"}
                github={"https://github.com/andevbonilla/fansive-code"}
                imgUrl={"fansive-interface.webp"}
                buttonText={projectsI18n("viewButton")}
                iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <WebRTCSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <SocketIOSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
            </section>

            <div className="h-[5rem]"></div>
          </StarsBackground>

          <City curiosfactText={curiosFactsI18n("3")} />

        </div >

        <div className='sea overflow-hidden z-30'>

          <div className="flex w-full pt-[3rem] bg-[#002134]">
            <Image
              alt='cave'
              src={require("@/assets/cave.webp")}
              className='w-full z-20 flex absolute'
            />
          </div>

          {/* my projects */}
          <section className="pt-10">

            {/* fishes section */}
            <div className="relative lg:mt-[30rem] mt-[20rem]">
              <CuriosFact
                meters={"-40"}
                text={curiosFactsI18n("4")}
              />
              <Image
                height={200}
                width={200}
                alt="magicarp swimming"
                className="xl:mr-[14rem] lg:mr-[12rem] md:mr-[8rem] absolute right-0 sm:top-[-10rem] top-[-15rem]"
                src={require("../../assets/magicarp.gif")}
              />
            </div>

            <Project name={"Virtual Board"}
              desc={projectsI18n("virtualBoardDesc")}
              link={"https://super-virtual-board.netlify.app/"}
              github={"https://github.com/andevbonilla/Virtual-Board"}
              imgUrl={"virtualboard-interface.webp"}
              buttonText={projectsI18n("viewButton")}
              iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />

            <CuriosFact
              meters={"-200"}
              text={curiosFactsI18n("5")}
            />

            <Project name={"Geekepedia"}
              desc={projectsI18n("geekepediaDesc")}
              link={"https://andevbonilla.github.io/Geekipedia/home/Geekipedia"}
              github={"https://github.com/andevbonilla/Geekipedia"}
              imgUrl={"geekipedia-interface.webp"}
              buttonText={projectsI18n("viewButton")}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"FileBox"}
              desc={projectsI18n("fileBoxDesc")}
              link={"https://filebox.netlify.app/#/login"}
              github={"https://github.com/andevbonilla/backend-fileBox"}
              imgUrl={"filebox-interface.webp"}
              buttonText={projectsI18n("viewButton")}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <AwsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <div className='flex lg:h-[10rem] h-[18rem] relative'>
              <Image
                src={require("@/assets/tentaculos.gif")}
                alt="kraken tentaculus"
                className='w-[30rem] h-[30rem] rotate-[90deg] absolute left-0'
              />
            </div>
          </section>

          <section className='px-[13%]' id="contact-form">
            <TitleSection
              text={contactI18n("title")}
            />
            <ContactForm
              namePlaceholder={contactI18n("namePlaceholder")}
              emailPlaceholder={contactI18n("emailPlaceholder")}
              messagePlaceholder={contactI18n("messagePlaceholder")}
              actionButton={contactI18n("actionButton")}
              errorNameRequired={contactI18n("errorNameRequired")}
              errorEmail={contactI18n("errorEmail")}
              errorMessage={contactI18n("errorMessage")}
              success={contactI18n("success")}
              errorGlobal={contactI18n("error")}
            />
          </section>

          <CuriosFact
            meters={"-3.800"}
            text={curiosFactsI18n("6")}
          />

          <Footer titanicAlt={imagesALtsI18n("titanic")} />

        </div>

      </main >


    </>
  )
}
