import { DarkThemeToggle } from "flowbite-react";

export default function MyHeader() {
  return (
    <main>
      <div className="flex">
        <div className="mr-2">
          <DarkThemeToggle />
        </div>
        <h2 className="text-4xl font-extrabold dark:text-white">
          Romeo Dela cruz Estoy Jr
        </h2>
      </div>
      <p className="my-4 text-sm text-gray-500">
        romeoestoy0101@gmail.com | +639502650820 | Mamburao, Occidental Mindoro
      </p>
      <hr />
    </main>
  );
}
