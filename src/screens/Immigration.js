import React from "react";
import Banner from "../components/constants/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MdOutlineDoubleArrow } from "react-icons/md";

const docs = [
  {
    name: "Passport",
  },
  {
    name: "Language test results",
  },
  {
    name: "Provincial nomination",
  },
  {
    name: "Proof of Canadian education",
  },
  {
    name: "Proof of job offer from a Canadian employer",
  },
  {
    name: "Medical exams",
  },
  {
    name: "Birth certificate",
  },
  {
    name: "Police certificates",
  },
  {
    name: "Proof of funds",
  },
  {
    name: "Identity proof",
  },
  {
    name: "Proof that a relative lives in Canada",
  },
];

const provinces = [
  {
    name: "Alberta",
  },
  {
    name: "British Columbia",
  },
  {
    name: "Manitoba",
  },
  {
    name: "New Brunswick",
  },
  {
    name: "Newfoundland and Labrador",
  },
  {
    name: "Northwest Territories",
  },
  {
    name: "Nova Scotia",
  },
  {
    name: "Ontario",
  },
  {
    name: "Prince Edward Island",
  },
  {
    name: "Saskatchewan",
  },
  {
    name: "Yukon",
  },
];

function Immigration() {
  return (
    <>
      <Header />
      <Banner
        title="Immigration"
        text="Get to know what it takes to immigrate to your dream country! With Chalo Overseas, Immigration is seamless and hassle-free process without any glitches."
        photo={require("../assets/content-03.png")}
        btntext="Explore"
      />
      <p className="uppercase text-4xl font-bold text-center text-[#2A69DE] my-16">
        canada
      </p>
      <div className="max-w-6xl mx-auto">
        <h4 className="text-3xl font-bold text-[#2A69DE] mt-16">
          Express Entry
        </h4>
        <p className="mt-5 text-lg tracking-wide">
          Express Entry is your door to settling in Canada permanently. Canada,
          being one of the friendliest countries in the world, has made this
          process extremely straightforward. And, with Chalo Overseas, you will
          go through it seamlessly and without any glitches.
        </p>
        <p className="mt-5 text-lg tracking-wide font-medium">
          Express Entry is an electronic system that manages all the
          applications of workers who are looking for permanent residence in
          Canada. The process involves the following steps:
        </p>
        <p className="mt-5 text-lg tracking-wide text-gray-800">
          1. Ensuring that you are eligible for the program by checking your
          Comprehensive Ranking System Score on our page Gathering all the
          required documents.
        </p>
        <div className="space-y-4 ml-5 mt-5 text-lg tracking-wide">
          {docs.map((item) => (
            <div className="flex items-center">
              <MdOutlineDoubleArrow />
              <p className="ml-2">{item.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-lg tracking-wide ml-5">
          <span className="text-red-600">Note:&nbsp;</span>This is only a
          tentative list of the required documents. The actual list depends on
          the individual applying and his/her profile.
        </p>
        <p className="mt-5 text-lg tracking-wide text-gray-800">
          2. Filling your profile and submitting it.
        </p>
        <p className="mt-5 text-lg tracking-wide text-gray-800">
          3. Checking your Comprehensive Ranking System Score.
        </p>
        <p className="mt-5 text-lg tracking-wide text-gray-800">
          4. Getting the invite and applying for PR.
        </p>
        <CRS />
        <PNP />
        <h4 className="text-3xl font-bold text-[#2A69DE] mt-16">
          Business Investor
        </h4>
        <p className="text-lg tracking-wide text-gray-800 mt-5">
          If you plan on establishing a start-up in Canada or immigrating as an
          investor, you can check the Start-up Visa Program. If you are
          innovative and can create jobs in the country, you might be eligible
          for this immigration program.
        </p>

        <h4 className="text-2xl font-bold text-[#2A69DE] mt-16">Eligibility</h4>
        <p className="text-lg tracking-wide text-gray-800 mt-5">
          <span className="font-semibold">
            You must check the following boxes to qualify for the Start-up Visa
            Program:
          </span>{" "}
          <br />
          Have a business <br />
          Have a letter of support from an organization that will invest in your
          business or supports it. <br />
          Have enough money/funds to live in Canada – if you are moving alone,
          you will need at least $12,960. <br />
          For a family of 2, the minimum funds required are $16,135, and so on.
          <br />
          Have language proficiency.
        </p>

        <h4 className="text-2xl font-bold text-[#2A69DE] mt-16">
          Application process
        </h4>
        <p className="text-lg tracking-wide text-gray-800 mt-5">
          <span className="font-semibold">
            The process starts by submitting your biometrics. This will be a
            paid process and the fee should be paid along with your application.
            After that, here are the steps:
          </span>
          <br /> <br />
          1. Get your application package, which comes with a document checklist
          and instruction guide. <br />
          2. Fill the application after going through the guide and gather all
          the required documents. <br />
          3. Pay the fee.
          <br />
          4. You may also have to pay third-party fee for medical exams,
          language tests, police checks, etc.
          <br />
          5. Make sure your application is complete and correctly filled, and
          then submit it to the address provided in the guide.
        </p>

        <h4 className="text-3xl font-bold text-[#2A69DE] mt-16">
          Other pathways
        </h4>
        <p className="text-lg tracking-wide mt-5">
          Besides Express Entry, PNP, and Start-up Visa Program, there are other
          pathways to immigrate to Canada.
        </p>
        <div className="space-y-4 mb-16 mt-5 ml-5">
          <p className="text-lg tracking-wide">1. Atlantic Immigration Pilot</p>
          <p className="text-lg tracking-wide">
            2. Rural and Northern Immigration Pilot
          </p>
          <p className="text-lg tracking-wide">
            3. Healthcare Workers Permanent Residence Pathway
          </p>
          <p className="text-lg tracking-wide">4. Family Sponsorship</p>
          <p className="text-lg tracking-wide">
            5. Quebec-selected Skilled Workers
          </p>
          <p className="text-lg tracking-wide">6. Caregivers</p>
          <p className="text-lg tracking-wide">7. Self-employed</p>
          <p className="text-lg tracking-wide">8. Agri-Food Pilot</p>
          <p className="text-lg tracking-wide">9. Refugees</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

const CRS = () => {
  return (
    <>
      <h4 className="text-3xl font-bold text-[#2A69DE] mt-16">
        What is the Comprehensive Ranking System (CRS)?
      </h4>
      <p className="mt-5 text-lg tracking-wide">
        CRS is Canada’s way to identify which skilled workers are better placed
        to succeed in Canada. It is a detailed system that scores immigrants
        against various parameters to reach out to workers who will fit the
        Canadian job landscape the best. This system has ensured that the job
        market in Canada is structured, methodical, and smooth. Thanks to this,
        immigrants enjoy multiple benefits such as high employment rates and
        high salaries.
      </p>
      <p className="mt-5 font-medium text-lg tracking-wide">
        Following are the factors considered in CRS:
      </p>
      <div className="space-y-5 mt-5 ml-5">
        <p className="text-lg tracking-wide text-gray-800">
          1. Skill Transferability Factors.
        </p>
        <p className="text-lg tracking-wide text-gray-800">
          2.Core Human Capital Factors.
        </p>
        <p className="text-lg tracking-wide text-gray-800">
          3. Factors relating to study experience in Canada, relatives in
          Canada, arranged employment, French language proficiency, etc.
        </p>
      </div>
      <p className="tracking-wide text-lg mt-5">
        Immigrants can score a maximum of 1200 points under CRS. Higher your
        score, more the chances of getting the invite. At Chalo Overseas, we
        will help you improve your CRS score so that you leave no stone unturned
        in ensuring that you receive an invitation to apply.
      </p>
    </>
  );
};

const PNP = () => {
  return (
    <>
      <h4 className="text-3xl font-bold text-[#2A69DE] mt-16">
        Provincial Nominee Program (PNP)
      </h4>
      <p className="mt-5 text-lg tracking-wide">
        1. While Express Entry is the fastest way to get permanent residence in
        Canada, it is not the only way. You can also take a look at the
        Provincial Nominee Program (PNP), which has been designed for
        individuals who:
      </p>
      <p className="mt-5 text-lg tracking-wide">
        Are looking to live in a particular province in Canada? <br /> Have the
        skills and expertise to boost the economy of the said province
        <br /> Would like Canadian PR?
      </p>
      <p className="font-semibold text-lg mt-5 tracking-wide">
        The participating provinces and territories have specific instructions
        on their respective website, which you must follow:
      </p>
      <div className="space-y-4 mt-5">
        {provinces.map((item, i) => (
          <p className="tracking-wide text-lg">
            {i + 1}.&nbsp;{item.name}
          </p>
        ))}
      </div>
      <p className="tracking-wide mt-5 text-lg font-semibold text-center">
        The only territories and provinces that are not a part of this program
        are Quebec and Nunavut.
      </p>
      <p className="tracking-wide mt-5 text-lg">
        Regardless of where you choose to live in Canada, you must pass police
        checks and medical exams. There are no exceptions to this rule. Also,
        depending on the place you would like to stay, the application process
        and options may vary. You may either have to go through a paper-based
        (Non-Express Entry) process or an Express Entry process. As the name
        suggests, the paper-based process takes longer.
      </p>
    </>
  );
};

export default Immigration;
