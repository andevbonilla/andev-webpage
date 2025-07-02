import Image from "next/image";
import { City } from "@/components/City";
import { ContactForm } from "@/components/ui/ContactForm";
import { CuriosFact } from "@/components/CuriosFact";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components//ui/Navbar";
import { PicturesInBalloons } from "@/components/Pictures";
import { Project } from "@/components/ui/Project";
import { StarsBackground } from "@/components/Stars";
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
import { BussinessCard } from "@/components/ui/BussinessCard";

const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {

  const imagesALtsI18n = useTranslations("Image-Alts");
  const curiosFactsI18n = useTranslations("Curios-Facts");
  const briefDesc = useTranslations("Brief-Desc");

  const navbarI18n = useTranslations("Navbar");
  const aboutI18n = useTranslations("About");
  const unaymugreI18n = useTranslations("UnaYMugre");
  const projectsI18n = useTranslations("My-Projects");
  const contactI18n = useTranslations("Contact");

  const businessI18n = useTranslations("Business");

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
            <div className='lg:flex-row flex flex-col justify-between items-start h-[84vh] px-[15%]'>

              <div className='hidden lg:flex lg:flex-col lg:justify-end lg:h-[90%]'>

                <p className="text-white text-[1.3rem] xl:text-[1.6rem] text-opacity-80">{briefDesc("desc")}</p>

                <h1 className={`text-white font-bold text-[1rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.1rem] xl:text-[4.5rem] ${anton.className}`}>
                  Andres Bonilla
                </h1>

              </div>

              <div className="flex flex-col justify-center items-center w-[100%] lg:ml-[3rem] lg:w-auto lg:h-[100%]">
                <Image
                  src={require("@/assets/me.webp")}
                  alt={imagesALtsI18n("andresTesla")}
                  className='w-[20rem] xl:w-[24rem] floating border-[1.5rem] border-white border-b-[4rem] mt-[10vh]'
                />
              </div>

              <div className="flex flex-col items-start justify-start lg:hidden">

                <p className="text-white text-[1.3rem] text-opacity-80">{briefDesc("desc")}</p>

                <h1 className={`text-white font-bold text-[2.6rem] xl:text-[3.2rem] ${anton.className}`}>
                  Andres Bonilla
                </h1>

              </div>


            </div>

            {/* about me */}
            <section className='md:px-[20%] px-[10%]' id="about">

              <TitleSection
                text={aboutI18n("title")}
              />

              <p className='text-white text-center text-xl leading-10 text-opacity-80'>{aboutI18n("text")}
              </p>

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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[10%]">
                <BussinessCard
                  desc={businessI18n("Simpliterms")}
                  imgUrl={"simpliterms-logo.webp"}
                  status={"green"}
                  name={"Simpliterms"}
                  statusName={"Active"}
                  visitTranslation={businessI18n("visit")}
                  link={"https://www.simpliterms.com/"}
                />
                <BussinessCard
                  desc={businessI18n("Movete")}
                  imgUrl={"movete-logo.webp"}
                  status={"red"}
                  name={"Movete"}
                  statusName={"Discontinued"}
                  visitTranslation={businessI18n("visit")}
                  link={"https://movete.vercel.app/"}
                />
                <BussinessCard
                  desc={businessI18n("Fansive")}
                  imgUrl={"fansive-logo.webp"}
                  status={"red"}
                  name={"Fansive"}
                  statusName={"Discontinued"}
                  visitTranslation={businessI18n("visit")}
                  link={"https://fansive.netlify.app/"}
                />
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
                <Link href={"https://www.instagram.com/mugre.fit/"}
                  target='_blank'
                  title='instagram of Uña Y Mugre'>
                  <FontAwesomeIcon icon={faInstagram} className='text-white hover:text-[#DFDFDF] transition-all duration-150 md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] mx-7' />
                </Link>
                <Link href={"https://www.tiktok.com/@mugre.fit"}
                  target='_blank'
                  title='tiktok of Uña Y Mugre'>
                  <FontAwesomeIcon icon={faTiktok} className='text-white hover:text-[#DFDFDF] transition-all duration-150 md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] mx-7' />
                </Link>
                <Link href={"https://www.youtube.com/@U%C3%B1ayMugreFIT/shorts"}
                  target='_blank'
                  title='youtube of Uña Y Mugre'>
                  <FontAwesomeIcon icon={faYoutube} className='text-white hover:text-[#DFDFDF] transition-all duration-150 md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] mx-7' />
                </Link>
              </div>

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

              <Project name={"YourDreamCar"}
                desc={projectsI18n("yourDreamCarDesc")}
                link={"https://your-dream-car.vercel.app/"}
                github={"https://github.com/andevbonilla/YourDreamCar"}
                imgUrl={"yourdreamcar-interface.webp"}
                buttonText={projectsI18n("viewButton")}
                iconList={[<Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <TailwindSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NextJsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
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

            <CuriosFact
              meters={"-200"}
              text={curiosFactsI18n("5")}
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
