import Image from "next/image";
import Link from "next/link";
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

export default function Home() {

  const imagesALtsI18n = useTranslations("Image-Alts");
  const curiosFactsI18n = useTranslations("Curios-Facts");

  const navbarI18n = useTranslations("Navbar");
  const occupationsI18n = useTranslations("Occupations");
  const aboutI18n = useTranslations("About");
  const businessI18n = useTranslations("Business");
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
            <div id="part4" className='h-16'></div>

            {/* presentation section */}
            <div className='md:px-[15%] lg:px-[20%] flex flex-col md:flex-row justify-center items-center h-screen px-[10%]'>

              <div className='mb-10 md:w-[50%]'>

                <h1 className='text-white font-bold text-[1.6rem] um:text-[2.2rem] xl:text-[3rem]'>Andres Bonilla</h1>

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
            <div className='md:px-[20%] px-[10%]'>
              <div className='flex w-full justify-center items-center' id='about'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>{aboutI18n("title")}</h2>
              </div>
              <p className='text-white text-center text-xl leading-10 text-opacity-80'>{aboutI18n("text1")}<a target='_blank' className='underline text-opacity-100 font-bold' href='https://fansive.netlify.app/#/login'>Fansive</a>{aboutI18n("text2")}<a target='_blank' className='underline text-opacity-100 font-bold' href='https://www.simpliterms.com'>Simpliterms</a>{aboutI18n("text3")}<a target='_blank' className='underline text-opacity-100 font-bold' href='https://info.movete.me'>Movete</a>.
              </p>
              <p className='mt-4 text-white text-center text-xl leading-10 text-opacity-80'>{aboutI18n("text4")}</p>
            </div>

            <CuriosFact text={curiosFactsI18n("1")} />

            {/* moon part */}
            <Moon
              altMoon={imagesALtsI18n("moonPicture")}
            />

            {/* my business */}
            <div className='w-full'>

              <div className='flex w-full justify-center items-center' id="business-part">
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white mt-[6rem] text-lg um:text-xl lg:mb-12'>{businessI18n("title")}</h2>
              </div>

              {/* simplieterms planet */}
              <div className='w-auto lg:flex lg:justify-between lg:items-center lg:mx-[16%]'>
                <div className='lg:w-[40%] lg:mx-0 md:mx-[25%] flex items-center justify-center h-[28rem] relative w-auto mx-[13%]'>
                  <Image
                    src={require("@/assets/simpliterms-planet.png")}
                    alt={imagesALtsI18n("simplitermsPlanet")}
                    className='absolute w-auto floating'
                  />
                </div>

                <div className='lg:w-[60%] lg:ml-12'>

                  <h3 className='font-bold text-2xl text-white mx-[13%] lg:mx-0 mb-[2rem]'>Simpliterms</h3>

                  <p className='text-white text-left text-xl leading-10 mx-[13%] lg:mx-0 mb-8'>
                    {businessI18n("simplitermsDesc")}
                  </p>

                  <div className='px-[13%] lg:px-0'>
                    <Link className='w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 transition-all' href={"https://www.simpliterms.com/"} target='_blank'>{businessI18n("viewButton")}</Link>
                  </div>

                </div>
              </div>

              {/* movete planet */}
              <div className='w-auto lg:flex lg:justify-between lg:items-center lg:mx-[16%] mt-10'>
                <div className='lg:w-[40%] lg:mx-0 md:mx-[25%] flex items-center justify-center h-[28rem] relative w-auto mx-[13%]'>
                  <Image
                    src={require("@/assets/simpliterms-planet.png")}
                    alt={imagesALtsI18n("movetePlanet")}
                    className='absolute w-auto floating'
                  />
                </div>

                <div className='lg:w-[60%] lg:ml-12'>

                  <h3 className='font-bold text-2xl text-white mx-[13%] lg:mx-0 mb-[2rem]'>Movete</h3>

                  <p className='text-white text-left text-xl leading-10 mx-[13%] lg:mx-0 mb-8'>
                    {businessI18n("moveteDesc")}
                  </p>

                  <div className='px-[13%] lg:px-0'>
                    <Link className='w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 transition-all' href={"https://info.movete.me"} target='_blank'>{businessI18n("viewButton")}</Link>
                  </div>

                </div>
              </div>

            </div>

            {/* my skills */}
            <div className='lg:px-[30%] px-[13%] mb-14'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>{skillsI18n("title")}</h2>
              </div>
              <Skills />
            </div>

            <CuriosFact text={curiosFactsI18n("2")} />

            <div id="part3" className='flex'>
              <Image
                src={require("@/assets/space-station-icon.png")}
                alt={imagesALtsI18n("InternationalSpaceStation")}
                className='international-space-station'
                id='international-space-station'
              />
            </div>


            {/* my projects */}
            <div id='projects'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>{projectsI18n("title")}</h2>
              </div>

              <Project name={"YourDreamCar"}
                desc={projectsI18n("yourDreamCarDesc")}
                link={"https://www.yourdreamcar.ca/"}
                github={"https://github.com/andevbonilla/YourDreamCar"}
                imgUrl={"yourdreamcar-interface.png"}
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
                imgUrl={"fansive-interface.png"}
                buttonText={projectsI18n("viewButton")}
                iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <WebRTCSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <SocketIOSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Virtual Board"}
                desc={projectsI18n("virtualBoardDesc")}
                link={"https://super-virtual-board.netlify.app/"}
                github={"https://github.com/andevbonilla/Virtual-Board"}
                imgUrl={"virtualboard-interface.jpg"}
                buttonText={projectsI18n("viewButton")}
                iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
            </div>

            <CuriosFact text={curiosFactsI18n("3")} />

            <div id="part2" className='flex'>
              <Image
                src={require("@/assets/vehicle7.png")}
                alt={imagesALtsI18n("airplane")}
                className='w-[17rem] h-[6rem] lg:w-[25rem] lg:h-[10rem] plane1'
              />
              <Image
                src={require("@/assets/vehicle8.png")}
                alt={imagesALtsI18n("airplane")}
                className='w-[12rem] h-[6rem] lg:w-[15rem] lg:h-[8rem] plane2'
              />
              <Image
                src={require("@/assets/airplane3-icon.png")}
                alt={imagesALtsI18n("airplane")}
                className='w-[7rem] h-[7rem] lg:w-[15rem] lg:h-[10rem] plane3'
              />
            </div>


            <div className='h-[30rem] sm:h-[40rem] md:h-[50rem] lg:h-[60rem] 2xl:h-[80rem] 3xl:h-[100rem]'></div>


          </StarsBackground>

          <City />

        </div>

        <div className='sea overflow-hidden'>

          <div className='flex h-[10rem]'>
            <Image
              src={require("@/assets/fish-group-1-icon.png")}
              alt="yellow fishes in group"
              className='w-[10rem] h-[10rem] fish-group'
            />
          </div>

          {/* my projects */}
          <div>

            <CuriosFact text={curiosFactsI18n("4")} />

            <div className='flex'>
              <Image
                src={require("@/assets/fish-group-1-icon.png")}
                alt={imagesALtsI18n("fishes")}
                className='w-[6rem] h-[6rem] fish-group delay-300'
              />
              <Image
                src={require("@/assets/fish-group-2-icon.png")}
                alt={imagesALtsI18n("fishes")}
                className='w-[8rem] h-[8rem] fish-group-2'
              />
              <Image
                src={require("@/assets/fish-group-3-icon.png")}
                alt={imagesALtsI18n("shark")}
                className='w-[30rem] h-[10rem] fish-group-3'
              />
            </div>
            <Project name={"FileBox"}
              desc={projectsI18n("fileBoxDesc")}
              link={"https://filebox.netlify.app/#/login"}
              github={"https://github.com/andevbonilla/backend-fileBox"}
              imgUrl={"filebox-interface.png"}
              buttonText={projectsI18n("viewButton")}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <AwsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"Geekepedia"}
              desc={projectsI18n("geekepediaDesc")}
              link={"https://andevbonilla.github.io/Geekipedia/home/Geekipedia"}
              github={"https://github.com/andevbonilla/Geekipedia"}
              imgUrl={"geekipedia-interface.png"}
              buttonText={projectsI18n("viewButton")}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"thePokedex"}
              desc={projectsI18n("thePokedexDesc")}
              link={"https://github.com/andevbonilla/thePokedex"}
              github={"https://github.com/andevbonilla/thePokedex"}
              imgUrl={"pokedex-interface.png"}
              buttonText={projectsI18n("viewButton")}
              iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              ]}
            />
            <div className='flex h-[18rem]'>
              <Image
                src={require("@/assets/tentaculos.gif")}
                alt="kraken tentaculus"
                className='w-[30rem] h-[30rem] rotate-[75deg] -translate-x-20'
              />
            </div>
          </div>

          <div className='px-[13%]'>
            <div className='flex w-full justify-center items-center' id='contact'>
              <h2 className='border-b-[.5rem] pl-[1rem] pr-[.2rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>{contactI18n("title")}</h2>
            </div>
            <ContactForm
              namePlaceholder={contactI18n("namePlaceholder")}
              emailPlaceholder={contactI18n("emailPlaceholder")}
              messagePlaceholder={contactI18n("messagePlaceholder")}
              actionButton={contactI18n("actionButton")}
              errorTooMessages={contactI18n("errorTooMessages")}
              errorNameRequired={contactI18n("errorNameRequired")}
              errorEmail={contactI18n("errorEmail")}
              errorMessage={contactI18n("errorMessage")}
              sending={contactI18n("sending")}
              success={contactI18n("success")}
              error={contactI18n("error")}
            />
          </div>

          <CuriosFact text={curiosFactsI18n("5")} />

          <Footer titanicAlt={imagesALtsI18n("titanic")} />

        </div>

      </main>


    </>
  )
}
