import MyHeader from "./components/header";
import MyEducation from "./components/education";
import MySkills from "./components/skills";
import MyProject from "./components/projects";
import MyCertificate from "./components/certificate";

export default function Home() {
  return (
    <main className=" min-h-screen justify-start gap-2 p-10 dark:bg-gray-800">
      <MyHeader />
      <div className=" lg:flex">
        <div className="lg:basis-1/2">
          <MySkills />
        </div>
        <div className="lg:basis-1/2">
          <MyEducation />
        </div>
      </div>

      <MyProject />
      <MyCertificate />
    </main>
  );
}
