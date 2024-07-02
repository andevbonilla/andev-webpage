import Image from "next/image";
import Link from "next/link";
import { City } from "@/components/City";
import { ContactForm } from "@/components/ContactForm";
import { CuriosFact } from "@/components/CuriosFact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PicturesInBalloons } from "@/components/Pictures";
import { Project } from "@/components/Project";
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

export default function Home() {

  const navbarI18n = useTranslations("Navbar");

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
                  <TypingAnimation stringList={['Software Developer', 'Entrepreneur', 'Athlete', "University Student"]}
                    wrapper="h2" />
                </div>

              </div>
              <div className='md:w-[50%] relative w-full h-[20rem] mt-[5rem] md:mb-[6rem] lg:mb-[12rem]'>
                <Image
                  src={require("@/assets/yo-en-el-tesla.webp")}
                  alt='Andres Bonilla in a tesla roadster'
                  width={350}
                  height={350}
                  className='absolute w-full floating'
                />
              </div>
            </div>

            {/* about me */}
            <div className='md:px-[20%] px-[10%]'>
              <div className='flex w-full justify-center items-center' id='about'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>ABOUT ME</h2>
              </div>
              <p className='text-white text-center text-xl leading-10 text-opacity-80'>👋 Hi, I&apos;m Andrés Bonilla. I&apos;m a university student, entrepreneur, and software developer. I started programming as a hobby at the age of 13 and founded my first tech company, <a target='_blank' className='underline text-opacity-100 font-bold' href='https://fansive.netlify.app/#/login'>Fansive</a>, at 16. Since then, I&apos;ve developed several projects, including <a target='_blank' className='underline text-opacity-100 font-bold' href='https://www.simpliterms.com'>Simpliterms</a> and <a target='_blank' className='underline text-opacity-100 font-bold' href='https://info.movete.me'>Movete</a>.
              </p>
              <p className='mt-4 text-white text-center text-xl leading-10 text-opacity-80'> I&apos;m passionate about continuous learning, traveling, cars, and, above all, ice cream. I&apos;m always looking for new opportunities to grow and contribute with my skills.</p>
            </div>

            <CuriosFact text={"We are 384,400 km above sea level, at this altitude the moon is orbiting the earth. Wait a little and you will surely see it."} />
            <div className='lg:h-[15rem] flex relative h-[8rem]'>
              <Image
                src={require("@/assets/moon-icon.png")}
                alt="moon picture"
                className='absolute moon'
              />
            </div>


            {/* my business */}
            <div className='w-full'>

              <div className='flex w-full justify-center items-center' id="business-part">
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white mt-[6rem] text-lg um:text-xl lg:mb-12'>MY BUSINESS</h2>
              </div>

              <div className='w-auto lg:flex lg:justify-between lg:items-center lg:mx-[16%]'>

                <div className='lg:w-[40%] lg:mx-0 md:mx-[25%] flex items-center justify-center h-[28rem] relative w-auto mx-[13%]'>
                  <Image
                    src={require("@/assets/simpliterms-planet.png")}
                    alt="simpliterm's planet"
                    className='absolute w-auto floating'
                  />
                </div>

                <div className='lg:w-[60%] lg:ml-12'>

                  <h3 className='font-bold text-2xl text-white mx-[13%] lg:mx-0 mb-[2rem]'>Simpliterms</h3>

                  <p className='text-white text-left text-xl leading-10 mx-[13%] lg:mx-0 mb-8'>
                    Have you ever clicked on accept privacy policy and/or terms of use without reading them because
                    they are too long and difficult to understand? Simpliterms is an extension that summarizes the policies
                    with a single click so you don&apos;t have to blindly accept them again.
                  </p>

                  <div className='px-[13%] lg:px-0'>
                    <Link className='w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 transition-all' href={"https://www.simpliterms.com/"} target='_blank'>View More</Link>
                  </div>

                </div>

              </div>

            </div>

            {/* my skills */}
            <div className='lg:px-[30%] px-[13%] mb-14'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>SKILLS</h2>
              </div>
              <Skills />
            </div>

            <CuriosFact text={"At this point we are 400 kilometers above sea level. At this altitude is the International Space Station (ISS)."} />
            <div id="part3" className='flex'>
              <Image
                src={require("@/assets/space-station-icon.png")}
                alt="International Space Station"
                className='international-space-station'
                id='international-space-station'
              />
            </div>


            {/* my projects */}
            <div id='projects'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>MY PROJECTS</h2>
              </div>

              <Project name={"YourDreamCar"}
                desc={"YourDreamCar is a web page that I designed for a company that I developed with my best friend David. Which offers wrapping services, window tinting and more. #YourDreamCar"}
                link={"https://www.yourdreamcar.ca/"}
                github={"https://github.com/andevbonilla/YourDreamCar"}
                imgUrl={"yourdreamcar-interface.png"}
                buttonText={"View Project"}
                iconList={[<Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <TailwindSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NextJsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Fansive"}
                desc={"Fansive is a startup created by me which is a platform for exclusive content. This app has all the necessary tools for content creators to offer the best content to their subscribers, such as live streaming, stories, group chats, private chats, post, file storage and much more."}
                link={"https://fansive.netlify.app/"}
                github={"https://github.com/andevbonilla/fansive-code"}
                imgUrl={"fansive-interface.png"}
                buttonText={"View Project"}
                iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <WebRTCSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <SocketIOSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Virtual Board"}
                desc={"Virtual Board is a web application made without using libraries that simulates a classroom board, so you can draw, erase, create figures, drag and drop, rotate and many other things. This app use trigonometry and algebra to solve some of the functionalities in the virtual board."}
                link={"https://super-virtual-board.netlify.app/"}
                github={"https://github.com/andevbonilla/Virtual-Board"}
                imgUrl={"virtualboard-interface.jpg"}
                buttonText={"View Project"}
                iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
            </div>

            <CuriosFact text={"At this point we are at an altitude of 30,000 meters, at this altitude most of today's commercial airplanes usually fly."} />
            <div id="part2" className='flex'>
              <Image
                src={require("@/assets/vehicle7.png")}
                alt="boeing 737"
                className='w-[17rem] h-[6rem] lg:w-[25rem] lg:h-[10rem] plane1'
              />
              <Image
                src={require("@/assets/vehicle8.png")}
                alt="militar airplane"
                className='w-[12rem] h-[6rem] lg:w-[15rem] lg:h-[8rem] plane2'
              />
              <Image
                src={require("@/assets/airplane3-icon.png")}
                alt="private jet"
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
            <CuriosFact text={"We are in shallow water at this depth you can find fish such as salmon, reef fish and more."} />
            <div className='flex'>
              <Image
                src={require("@/assets/fish-group-1-icon.png")}
                alt="yellow fishes in group"
                className='w-[6rem] h-[6rem] fish-group delay-300'
              />
              <Image
                src={require("@/assets/fish-group-2-icon.png")}
                alt="salmon fish swimming"
                className='w-[8rem] h-[8rem] fish-group-2'
              />
              <Image
                src={require("@/assets/fish-group-3-icon.png")}
                alt="shark swimming"
                className='w-[30rem] h-[10rem] fish-group-3'
              />
            </div>
            <Project name={"FileBox"}
              desc={"fileBox is an application created by me very similar to dropbox, google drive or similar, in which anyone can upload files, download them, create folders and many other functions."}
              link={"https://filebox.netlify.app/#/login"}
              github={"https://github.com/andevbonilla/backend-fileBox"}
              imgUrl={"filebox-interface.png"}
              buttonText={"View Project"}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <AwsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"Geekepedia"}
              desc={"Geekipedia is a blog where you can learn how some of the most famous algorithms in computer science work, such as BFS (Breath First Search), QuickSort, Binary Search and many more."}
              link={"https://andevbonilla.github.io/Geekipedia/home/Geekipedia"}
              github={"https://github.com/andevbonilla/Geekipedia"}
              imgUrl={"geekipedia-interface.png"}
              buttonText={"View Project"}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"thePokedex"}
              desc={"thePokedex is an app with light and dark theme in which you can find and search information of all existing pokemon and you can use it on android and ios devices."}
              link={"https://github.com/andevbonilla/thePokedex"}
              github={"https://github.com/andevbonilla/thePokedex"}
              imgUrl={"pokedex-interface.png"}
              buttonText={"View Project"}
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
              <h2 className='border-b-[.5rem] pl-[1rem] pr-[.2rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>CONTACT</h2>
            </div>
            <ContactForm lenguage={"en"} />
          </div>

          <CuriosFact text={"At this point we are at 3.800 meters deep, at this depth is the remains of the Titanic and ends the content of my website."} />

          <Footer titanicAlt={"titanic in the deep of the sea"} />

        </div>

      </main>


    </>
  )
}
