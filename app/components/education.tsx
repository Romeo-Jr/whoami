export default function MyEducation() {
  return (
    <main>
      <h6 className="my-3 text-lg font-bold dark:text-white">Education</h6>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-6 ms-4">
          <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2008-2014
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Elementary
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Balansay Elementary School
          </p>
        </li>
        <li className="mb-6 ms-4">
          <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2014-2018
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            High School
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Occidental Mindoro National High School
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021-PRESENT
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            College
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Batangas State University - The National Engineering University
          </p>
        </li>
      </ol>
    </main>
  );
}
