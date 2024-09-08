import Image from "next/image";
import "./page.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-12 overflow-auto relative"
      style={{
        backgroundImage: "url('/Planes over landmarks.jpeg')",
      }}
    >
      <div className="bg-fixed-cover absolute inset-0 z-0"></div>
      <section className="relative z-10">
        <div className="flex text-[100px] font-serif justify-center text-center font-medium text text-blue-800 ">
          StudyXchange
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl text-center p-2 bg-yellow-400 rounded-full text-blue-800 max-w-fit mx-auto">
            The <strong className="font-extrabold">ONLY</strong> place you need
            to plan out your exchange program
          </div>
          <div className="text-blue-800 text-xl text-center py-2 flex flex-col justify-center items-center mt-3">
            <div className="mb-2">
              With StudyXchange, save your
              <strong className="font-extrabold">&nbsp;TIME&nbsp;</strong>and
              <strong className="font-extrabold">&nbsp;ENERGY&nbsp;</strong>
              planning your exchange.
            </div>
            <div className="mt-2">
              Tell us your major, and then leave the rest to us.
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex-1">
        <div className="flex text-[70px] mt-10 font-serif justify-start underline font-medium text-blue-800">
          Features
        </div>
        <div className="grid grid-cols-2 flex-row mx-auto space-x-10">
          <div className="w-auto h-64 duration-500 group overflow-hidden relative rounded bg-blue-800 text-yellow-400 p-4 flex flex-col justify-evenly">
            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
            <div className="z-10 flex flex-col justify-evenly w-full h-full">
              <span className="text-2xl font-bold">
                Find exchange universities suitable for{" "}
                <strong className="font-extrabold">&nbsp;YOUR&nbsp;</strong>{" "}
                major
              </span>
              <p>
                No more wasting time finding your eligible exchange universities
                for HOURS.
                <br />
                <br />
                Figure out which exchange universities YOU can attend in a
                click, so that you can spend your time planning out your trip.
                <br />
                <br />
                Give us your major, we do the rest.
              </p>
            </div>
          </div>
          <div className="w-auto h-64 duration-500 group overflow-hidden relative rounded bg-blue-800 text-yellow-400 p-4 flex flex-col justify-evenly">
            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
            <div className="z-10 flex flex-col justify-evenly w-full h-full">
              <span className="text-2xl font-bold">
                Don't just find universities. Learn about their countries major
              </span>
              Don't just find universities. Learn about their countries. Find
              out about:
              <br />
              - Cost of living
              <br />
              - Things to do
              <br />
              - Places you should go to and avoid
              <br />
              - Cultural norms
              <br />
              <br />
              So that you can prepare and plan out a memorable exchange trip!
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
