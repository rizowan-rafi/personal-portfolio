import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'
import Link from "next/link";
export default function Home() {
  return (
      <section className="h-full">
          <div className="container mx-auto h-full text-white px-4 md:px-6 lg:px-8 xl:px-12">
              <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                  {/* text  */}
                  <div className="text-center xl:text-left order-2 xl:order-none">
                      <span className="text-xl">Software Developer</span>
                      <h1 className="h1 mb-6">
                          Hello I'm <br />{" "}
                          <span className="text-accentDefault">
                              Rizowan Mahmud Rafi
                          </span>
                      </h1>
                      <p className="max-w-[500px] mb-9 text-white/80">
                          I excel at building dynamic and responsive full-stack
                          web applications, turning complex problems into
                          intuitive and user-friendly digital experiences.
                      </p>

                      {/* btn and social  */}
                      <div className="flex flex-col xl:flex-row items-center gap-8">
                          <Link href="https://drive.google.com/uc?export=download&id=1Nmu1TaxTI3-vTrnxGt8ULbl3X74bI5ny">
                              <Button
                                  variant={"outline"}
                                  size={"lg"}
                                  className={
                                      "uppercase cursor-pointer rounded-full items-center flex gap-2"
                                  }
                              >
                                  <span>Download CV</span>
                                  <FiDownload className="text-xl "></FiDownload>
                              </Button>
                          </Link>
                          <div className="mb-8 xl:mb-0">
                              <Socials
                                  containerStyles={"flex gap-6 "}
                                  iconStyles={
                                      "w-9 h-9 border border-accentDefault rounded-full flex justify-center items-center text-accentDefault text-base hover:bg-accentDefault hover:text-primaryColor hover:transition-all duration-500"
                                  }
                              ></Socials>
                          </div>
                      </div>
                  </div>

                  {/* photo  */}
                  <div className="order-1 xl:order-none mb-8 xl:mb-0">
                      <Photo></Photo>
                  </div>
              </div>
          </div>
      </section>
  );
}
