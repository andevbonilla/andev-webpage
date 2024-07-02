"use client"
import Image from 'next/image';
import React, {useEffect, useState, useRef} from 'react';

export const Vehicle = ({lenguage}:any) => {

    const [counterTime, setCounterTime] = useState(5); // in seconds
    const [vehicleIndex, setvehicleIndex] = useState(0);
    const [canUptade, setCanUptade] = useState(false);
    const [canClick, setCanClick] = useState(true);
    const [showVehicleInfo, setShowVehicleInfo] = useState(false);
    const [vehiclePosition, setVehiclePosition] = useState(0);
    const [vehicleIsMoving, setVehicleIsMoving] = useState(false);
    const [vehiclePart, setVehiclePart] = useState(1); // in which part is the vehicle
    
    const vehicleWrapper:any = useRef(null);
    const vehicleIMG:any = useRef(null);

    
    const [vehicles, setVehicles] = useState([
        {
            velocity: 30,
            img: "vehicle1.png",
            vehicle: "supercross bicycle",
            maxSpeed: "30 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 8 minutes",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 1 hour",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 12 hours",
            totalTime: "aprox 18 months",
        },
        {
            velocity: 90,
            img: "vehicle2.png",
            vehicle: "Honda cb 125f",
            maxSpeed: "90 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 2.5 minutes",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 20 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 4 hours",
            totalTime: "aprox 180 days",
        },
        {
            velocity: 160,
            img: "vehicle3.png",
            vehicle: "Renault Sandero Dynamic",
            maxSpeed: "160 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 1.46 minutes",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 11.5 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 2.3 hours",
            totalTime: "aprox 101 days",
        },
        {
            velocity: 250,
            img: "vehicle4.png",
            vehicle: "BMW M4 competition",
            maxSpeed: "250 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 63 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 7.3 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 1.48 hours",
            totalTime: "aprox 65 days",
        },
        {
            velocity: 300,
            img: "vehicle5.png",
            vehicle: "Porsche 992 GT3 rs",
            maxSpeed: "300 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 48 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 6 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 1.2 hours",
            totalTime: "aprox 54 days",
        },
        {
            velocity: 490,
            img: "vehicle6.png",
            vehicle: "Bugatti Chiron Super Sport",
            maxSpeed: "490 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 30 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 3.7 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 45 minutes",
            totalTime: "aprox 33 days",
        },
        {
            velocity: 840,
            img: "vehicle7.png",
            vehicle: "Boeing 737",
            maxSpeed: "840 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 16.5 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 2.2 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 26.4 minutes",
            totalTime: "aprox 19 days",
        },
        {
            velocity: 2600,
            img: "vehicle8.png",
            vehicle: "f-15 eagle",
            maxSpeed: "2.600 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 5.5 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 43 seconds",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 8.6 minutes",
            totalTime: "aprox 6 days",
        },
        {
            velocity: 64500,
            img: "vehicle9.png",
            vehicle: "Saturn V - Nasa",
            maxSpeed: "64.500 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 212 miliseconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 1.75 seconds",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 21 seconds",
            totalTime: "aprox 6 hours",
        },
        {
            velocity: 692000,
            img: "vehicle10.png",
            vehicle: "Parker Solar Probe",
            maxSpeed: "692.000 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 20 miliseconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 158 miliseconds",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 2 seconds",
            totalTime: "aprox 33 minutes",
        },
        {
            velocity: 2000000,
            img: "vehicle11.png",
            vehicle: "Caza estelar T-65 Ala-X - Stars Wars",
            maxSpeed: "2.000.000 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 6.3 miliseconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 50 miliseconds",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 0.66 seconds",
            totalTime: "aprox 11 minutes",
        },
    ]);


    useEffect(() => {

        let number = 5;
        const newInterval = setInterval(() => {
            if (!canUptade) {
                number--;
                setCounterTime(number);
                if (number === 0) {
                    setCounterTime(5);
                    number = 5;
                    setCanUptade(true);
                 }
            }
        }, 1000);

        return () => {
            clearInterval(newInterval);
        }
      
    }, [canUptade]);

    const [texts, setTexts] = useState({
            title: "Speed Simulator",
            vehicleName: "Vehicle:",
            maxSpeed: "Max-Speed:",
            distance: "Bottom of the page -> Top of the page:",
            adviceTitle: "IMPORTANT",
            advice: "This is a realistic speed simulation. So in case you see it stopped it is because it is going too slow for the distance it has to travel.",
            followButton: "Follow",
            closeButton: "Close",
            updateButton: "Update"
    });
    useEffect(() => {

        if (lenguage === "en") {
            setTexts({
                title: "Speed Simulator",
                vehicleName: "Vehicle:",
                maxSpeed: "Max-Speed:",
                distance: "Bottom of the page -> Top of the page:",
                adviceTitle: "IMPORTANT",
                advice: "This is a realistic speed simulation. So in case you see it stopped it is because it is going too slow for the distance it has to travel.",
                followButton: "Follow",
                closeButton: "Close",
                updateButton: "Update"
            })
        }else if(lenguage === "es"){
            setTexts({
                title: "Simulador de Velocidad",
                vehicleName: "Vehiculo:",
                maxSpeed: "Maxima Velocidad:",
                distance: "Fondo de la pagina web -> Inicio de la pagina web:",
                adviceTitle: "IMPORTANTE",
                advice: "Esta es una simulación de velocidad realista. Por lo tanto, en caso de que veas que se detiene, es porque está yendo demasiado lento para la distancia que tiene que recorrer.",
                followButton: "Seguir",
                closeButton: "Cerrar",
                updateButton: "Mejorar"
            })
        }else if(lenguage === "ch"){
            setTexts({
                title: "速度模拟器",
                vehicleName: "车辆：",
                maxSpeed: "最大速度：",
                distance: "网页背景 -> 网页顶部：",
                adviceTitle: "重要事项",
                advice: "这是一种真实的速度模拟。因此，如果你看到它停了下来，那是因为它的速度太慢，无法满足它的行驶距离。",
                followButton: "跟进",
                closeButton: "关闭",
                updateButton: "改进"
            })
        }else if(lenguage === "hi"){
            setTexts({
                title: "स्पीड सिम्युलेटर",
                vehicleName: "वाहन:",
                maxSpeed: "अधिकतम गति:",
                distance: "वेब पेज की पृष्ठभूमि -> वेब पेज का मुखपृष्ठ:",
                adviceTitle: "महत्वपूर्ण",
                advice: "यह एक यथार्थवादी गति अनुकरण है. इसलिए, यदि आप इसे रुकते हुए देखते हैं, तो इसका कारण यह है कि यह जितनी दूरी तय करनी है, उसके हिसाब से यह बहुत धीमी गति से चल रही है।",
                followButton: "जारी रखना",
                closeButton: "बंद करना",
                updateButton: "सुधार"
            })
        }else if(lenguage === "fr"){
            setTexts({
                title: "Simulateur de vitesse",
                vehicleName: "Véhicule:",
                maxSpeed: "Vitesse maximale:",
                distance: "Arrière-plan de la page web -> Haut de la page web:",
                adviceTitle: "IMPORTANT",
                advice: "Il s'agit d'une simulation de vitesse réaliste. Par conséquent, si vous voyez qu'il s'arrête, c'est parce qu'il va trop lentement par rapport à la distance qu'il doit parcourir.",
                followButton: "Suivre",
                closeButton: "Fermer",
                updateButton: "Améliorer"
            })
        }else if(lenguage === "ja"){
            setTexts({
                title: "スピードシミュレーター",
                vehicleName: "車だ：",
                maxSpeed: "最高速度:",
                distance: "ウェブページの背景→ウェブページのトップ：",
                adviceTitle: "重要",
                advice: "これは現実的なスピードシミュレーションである。したがって、万が一止まってしまった場合は、移動距離に対してスピードが遅すぎるためです。",
                followButton: "フォロー",
                closeButton: "閉じる",
                updateButton: "改善"
            })
        }else {
            setTexts({
                title: "Speed Simulator",
                vehicleName: "Vehicle:",
                maxSpeed: "Max-Speed:",
                distance: "Bottom of the page -> Top of the page:",
                adviceTitle: "IMPORTANT",
                advice: "This is a realistic speed simulation. So in case you see it stopped it is because it is going too slow for the distance it has to travel.",
                followButton: "Follow",
                closeButton: "Close",
                updateButton: "Update"
            })
        }

        let isScrolling:any;
        document.addEventListener('scroll', function () {
            
            clearTimeout(isScrolling);
            setCanClick(false);

            if (vehicleWrapper.current) {
                vehicleWrapper.current.style.opacity = '0.4';
                vehicleWrapper.current.classList.remove('opacity-transition');
            }

            isScrolling = setTimeout(function () {
                if (vehicleWrapper.current) {
                    vehicleWrapper.current.classList.add('opacity-transition');
                    vehicleWrapper.current.style.opacity = '1';
                }
                setCanClick(true);
            }, 200);

        }, false);

    }, [])
    
    const goUp = () => {
        if(!canClick) return;
        window.scrollTo(0, document.body.scrollHeight);
        setVehicleIsMoving(true);
        setTimeout(() => {
            setShowVehicleInfo(true);
            moveImage();
        }, 200);
    }

    const calculateAmountOfpixels = (elem:any) => {
        return elem.offsetTop - window.innerHeight; // return the amount of pixels between th parts
    }

    // velocity: km/h distance: km
    const calculateTime = (velocity:number, distance:number) => {
        return (3600 * distance) / velocity; // return the time it will take to go up. in seconds
    }

    const moveImage = (vindex:number = vehicleIndex) => {

            const part1 = document.getElementById("part1");
            const part2 = document.getElementById("part2");
            const part3 = document.getElementById("part3");
            const part4 = document.getElementById("part4");

            let speed = Math.abs(calculateAmountOfpixels(part1)) / calculateTime(vehicles[vindex].velocity, 3.8);
            let position =  0; // Posición inicial desde el fondo
            if (vehiclePosition === 0) {
                position =  document.body.scrollHeight-1000;
            }else{
                position =  vehiclePosition;
            }

            const moveStep = (timestamp:any) => {

                const timeDelta = timestamp - lastTimestamp;
                lastTimestamp = timestamp;

                position -= speed * (timeDelta / 1000);

                vehicleIMG.current.style.transform = `translate(-30%, ${position}px) rotate(90deg) scale(1.2,1.2)`;
                setVehiclePosition(position);
                vehicleIMG.current.style.zIndex = "99";

                if (position > calculateAmountOfpixels(part1)) {

                    setVehiclePart(1);
                    speed = Math.abs(calculateAmountOfpixels(part1)) / calculateTime(vehicles[vindex].velocity, 3.8);
                    requestAnimationFrame(moveStep);

                } else if (position > calculateAmountOfpixels(part2)) {

                    // La imagen ha alcanzado la parte
                    setVehiclePart(2);
                    speed = Math.abs(calculateAmountOfpixels(part2)) / calculateTime(vehicles[vindex].velocity, 30);
                    requestAnimationFrame(moveStep);

                } else if (position > calculateAmountOfpixels(part3)) {

                    // La imagen ha alcanzado la parte 
                    setVehiclePart(3); 
                    speed = Math.abs(calculateAmountOfpixels(part3)) / calculateTime(vehicles[vindex].velocity, 370);
                    requestAnimationFrame(moveStep);

                } else if (position > calculateAmountOfpixels(part4)) {

                    // La imagen ha alcanzado la parte
                    setVehiclePart(4);
                    speed = Math.abs(calculateAmountOfpixels(part4)) / calculateTime(vehicles[vindex].velocity, 390000);
                    requestAnimationFrame(moveStep);

                }else{
                    // La imagen ha alcanzado la parte superior, puedes realizar acciones adicionales aquí si es necesario
                    setVehicleIsMoving(false);
                    setVehiclePosition(0);
                    setVehiclePart(1);
                }
            }

            let lastTimestamp = performance.now();
            requestAnimationFrame(moveStep);
    }

    const updateVehicle = () => {
        if (!canUptade) return;
        if (vehicleIndex === 10) return;
        if (vehicleIsMoving) {
            setVehicleIsMoving(true);
            setvehicleIndex(vehicleIndex+1);
            setCanUptade(false);
            window.scrollTo(0, vehiclePosition);
            moveImage(vehicleIndex+1);
            return;
        }
        setvehicleIndex(vehicleIndex+1);
        setCanUptade(false);
    }


    const closeInfo = () => {
        setShowVehicleInfo(false);
    }

    const findVehicleInScreen = () => {
        window.scrollTo(0, vehiclePosition);
    }
    
  return (
    <>
            {

                   showVehicleInfo &&  <div className={`opacity-transition fixed w-full bottom-0 left-0 z-50 bg-black bg-opacity-95 text-white py-10 px-[10%] lg:px-[25%]`}>            
                                            <h2 className='font-bold text-white mb-10 text-2xl'>{texts.title}</h2>
                                            <div className='flex'>
                                                <p className='font-bold text-lg mr-2'>{texts.vehicleName}</p>
                                                <p className='text-lg opacity-80'>{vehicles[vehicleIndex].vehicle}</p>
                                            </div>
                                            <div className='flex mt-6'>
                                                <p className='font-bold text-lg mr-2'>{texts.maxSpeed}</p>
                                                <p className='text-lg opacity-80'>{vehicles[vehicleIndex].maxSpeed}</p>
                                            </div>
                                            <div className={`${(vehiclePart === 4) ? "bg-green-400 bg-opacity-50 p-2" : ""} flex mt-6`}>
                                                <p className="font-bold text-lg mr-2">{texts.distance}</p>
                                                <p className='text-lg opacity-80'>{vehicles[vehicleIndex].totalTime}</p>
                                            </div>
                                            
                                            <div>
                                                <p className='font-bold text-lg mt-6'>{texts.adviceTitle}</p>
                                                <p className='text-lg opacity-80 mt-2'>{texts.advice}</p>
                                            </div>
                                            <div className='w-full flex justify-start items-center mt-10'>
                                                <button onClick={findVehicleInScreen} className='bg-yellow-200 py-4 px-5 text-black font-bold mr-6' type='button'>{texts.followButton}</button>
                                                <button onClick={closeInfo} className='bg-yellow-200 py-4 px-5 text-black font-bold' type='button'>{texts.closeButton}</button>
                                            </div>
                                        </div>
                
            }

            {
               vehicleIsMoving && <button onClick={()=>setShowVehicleInfo(true)} ref={vehicleIMG} className='z-[999] absolute left-0 bottom-0 w-[12rem] h-[12rem]'>
                                        <Image    
                                            src={require(`@/assets/${vehicles[vehicleIndex].img}`)}
                                            alt={vehicles[vehicleIndex].vehicle}
                                            className='w-auto relative z-[999]'
                                        />
                                  </button>
            }

            {
               vehicleIsMoving && <div className='fixed flex justify-center items-center w-full mt-4 z-[995]'>
                                        <button onClick={findVehicleInScreen} className='text-white font-bold bg-green-500 bg-opacity-90 z-[99] py-4 px-5 rounded-full'>
                                            {(vehiclePart === 1) && <p className='font-bold'>{`Titanic -> City`}: <span className='font-normal opacity-85'>{vehicles[vehicleIndex].timeTitanic}</span></p>}
                                            {(vehiclePart === 2) && <p className='font-bold'>{`City -> Airplanes`}: <span className='font-normal opacity-85'>{vehicles[vehicleIndex].timeCity}</span></p>}
                                            {(vehiclePart === 3) && <p className='font-bold'>{`Airplanes -> ISS`}: <span className='font-normal opacity-85'>{vehicles[vehicleIndex].timeAirplanes}</span></p>}
                                            {(vehiclePart === 4) && <p className='font-bold'>{`ISS -> +moon`}: <span className='font-normal opacity-85'>{vehicles[vehicleIndex].totalTime}</span></p>}
                                        </button>
                
                                  </div>
            }

            {
                  <div ref={vehicleWrapper} className={`fixed bottom-0 right-0 mr-6 z-[200] flex flex-col justify-center items-center`}>
                                        <button onClick={goUp}
                                                type='button' 
                                                className={`rounded-full bg-white p-2 ${(canUptade) ? "border-green-500" : "border-gray-400"} border-4 w-[6rem] h-[6rem]`}>

                                            <Image 
                                                src={require(`@/assets/${vehicles[vehicleIndex].img}`)}
                                                alt={vehicles[vehicleIndex].vehicle}
                                                className='w-full'
                                            />

                                        </button>

                                        {
                                            (canUptade && vehicleIndex !== 10) && <button onClick={updateVehicle} type='button' className='bg-green-500 py-2 px-3 text-white rounded-full -translate-y-8 text-lg'>{texts.updateButton}</button>
                                        }

                                        {
                                            (!canUptade && vehicleIndex !== 10) && <p onClick={goUp} className='bg-gray-400 py-2 px-3 text-white rounded-full -translate-y-8 text-lg'>{counterTime}s</p>
                                        }

                                        {
                                            (vehicleIndex === 10) && <p className='opacity-0'>{counterTime}s</p>
                                        }
                                        
                                </div>
            }


    </>

  )
}
