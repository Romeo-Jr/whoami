import ProjectCard from "./sub/projectCards";

export default function MyProject() {
  return (
    <main>
      <h6 className="my-3 text-lg font-bold dark:text-white">Project</h6>

      <div className="lg:grid lg:grid-cols-3 lg:gap-4">
        <div className="mb-4 flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 lg:flex">
          <ProjectCard
            title="IoT-Based Greenhouse Monitoring and Automatic Watering System"
            description="IoT project that monitors greenhouse environment such as soil moisture, soil pH, temperature and humidity and automate the watering process with Android Application."
            link="https://github.com/Romeo-Jr/iot-based-greenhouse-monitoring-automated-watering-system"
          />
        </div>

        <div className="mb-4 flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 lg:flex">
          <ProjectCard
            title="IoT-Based Water Temperature Monitoring and Automatic Pump Control"
            description="IoT project that monitor water temperature and automate the pump with Web-based Application."
            link="https://github.com/Romeo-Jr/azolla-monitoring-tool"
          />
        </div>

        <div className="mb-4 flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 lg:flex">
          <ProjectCard
            title="Weather App"
            description="Simple Mobile based Weather App written in Flutter with weatherapi integration"
            link="https://github.com/Romeo-Jr/weather-app"
          />
        </div>

        <div className="mb-4 flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
          <ProjectCard
            title="Omeco Queuing System"
            description="Simple Web-based queuing system app written in PHP"
            link="https://github.com/Romeo-Jr/OmecoQueuingSystem"
          />
        </div>

        <div className="mb-4 flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
          <ProjectCard
            title="IoT-Based Environment Monitoring"
            description="Environment Monitoring using LilyGo microcontroller"
            link="https://github.com/Romeo-Jr/iot-based-environment-monitoring"
          />
        </div>
      </div>
    </main>
  );
}
