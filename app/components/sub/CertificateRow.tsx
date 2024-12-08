import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import { Button, Modal } from "flowbite-react";

interface CertificateProps {
  title: string;
  description: string;
  link: StaticImageData;
}

const CertificateRow: React.FC<CertificateProps> = ({
  title,
  description,
  link,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      <div className="flex">
        <div className="mb-3 mr-3">
          <Button color="dark" onClick={() => setOpenModal(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </Button>

          <Modal
            show={openModal}
            size="md"
            popup
            onClose={() => setOpenModal(false)}
            initialFocus={emailInputRef}
          >
            <Modal.Header />
            <Modal.Body>
              <Image
                src={link}
                className="col-span-2 h-full"
                alt="Certificate"
              />
            </Modal.Body>
          </Modal>
        </div>

        <div className="dark:text-white">
          <p className=" font-semibold text-gray-900 dark:text-white">
            {title}
          </p>
          <p className=" font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default CertificateRow;
