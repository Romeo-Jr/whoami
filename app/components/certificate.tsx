"use client";

import cert1 from "../../public/images/cert1.jpg";
import cert2 from "../../public/images/cert2.jpg";
import cert3 from "../../public/images/cert3.jpg";
import cert4 from "../../public/images/cert4.jpg";
import cert5 from "../../public/images/cert5.jpg";
import cert6 from "../../public/images/cert6.png";
import cert7 from "../../public/images/cert7.jpg";
import cert8 from "../../public/images/cert8.jpg";

import CertificateRow from "./sub/CertificateRow";

export default function MyCertificate() {
  return (
    <main>
      <h1 className="mb-4 text-lg font-bold dark:text-white">Certificate</h1>

      <CertificateRow
        title="2nd Place in HACKCESS Python Category"
        description="HACKCESS MANIA - November 2022"
        link={cert6}
      />

      <CertificateRow
        title="3nd Place in Networking Competition"
        description="Technofusion 2023 - 8 May 2023"
        link={cert7}
      />

      <CertificateRow
        title="1st Place in Networking Competition"
        description="Technofusion 2024 - 7 March 2024"
        link={cert8}
      />

      <CertificateRow
        title="IoT Fundamentals: Connecting Things"
        description="Certificate of Completion - 12 Feb 2024"
        link={cert1}
      />

      <CertificateRow
        title="CCNAv7: Enterprise Networking, Security, and Automation"
        description="Certificate of Completion - 12 Feb 2024"
        link={cert2}
      />

      <CertificateRow
        title="Cloud Security Best Practices with Microsoft Azure"
        description="Certificate of Completion - 31 August 2021"
        link={cert3}
      />

      <CertificateRow
        title="AWS Academy Introduction to Cloud"
        description="Certificate of Completion - 20 May 2024"
        link={cert4}
      />

      <CertificateRow
        title="Cybersecurity Essentials"
        description="Certificate of Completion - 29 April 2024"
        link={cert5}
      />
    </main>
  );
}
