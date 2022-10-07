import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import { storage } from "../../firebase";

function CreateCollege() {
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };

  //data
  const [name, setName] = useState();
  const [dli, setDli] = useState();
  const [institutionType, setInstitutionType] = useState();
  const [city, setCity] = useState();
  const [year, setYear] = useState();
  const [province, setProvince] = useState();
  const [country, setCountry] = useState();
  const [address, setAddress] = useState();
  const [desc, setDesc] = useState();

  const handleSubmit = async () => {
    await axios.post("/api/colleges", {
      name,
      desc,
      logo: logoUrl,
      year,
      city,
      province,
      country,
      address,
      dli_number: dli,
      institution_type: institutionType,
    });
    toast.success("College created successfully", {
      theme: "colored",
      position: "top-center",
    });
  };

  //upload for logo
  const [logo, setLogo] = useState();
  const [logoUploadProgress, setLogoUploadProgress] = useState(0);
  const [logoUrl, setLogoUrl] = useState();

  useEffect(() => {
    if (logo !== undefined) {
      const uploadLogo = () => {
        const name = new Date().getTime() + logo.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, logo);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setLogoUploadProgress(progress);

            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setLogoUrl(downloadURL);
            });
          }
        );
      };
      logo && uploadLogo();
    }
  }, [logo]);
  return (
    <>
      <div className="flex flex-row h-screen">
        <Sidebar active={active} />
        <div className="flex-auto bg-gray-50 overflow-auto">
          <Navbar handleActive={handleActive} />
          <div className="m-5 bg-white rounded border border-gray-100 shadow p-5">
            <p className="font-semibold text-xl mb-3">Create College</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              <div className="relative w-full mb-4">
                <label className="block font-semibold text-blue-700 text-sm mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="relative w-full mb-4">
                <label className="block font-semibold text-blue-700 text-sm mb-1">
                  DLI Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
                  onChange={(e) => setDli(e.target.value)}
                />
              </div>
              <div className="relative w-full mb-4">
                <label className="block font-semibold text-blue-700 text-sm mb-1">
                  Institution Type
                </label>
                <input
                  type="text"
                  className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
                  onChange={(e) => setInstitutionType(e.target.value)}
                />
              </div>
              <div className="relative w-full mb-4">
                <label className="block font-semibold text-blue-700 text-sm mb-1">
                  City <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="relative w-full mb-4">
                <label className="block font-semibold text-blue-700 text-sm mb-1">
                  Province <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>
              <div className="relative w-full mb-4">
                <label className="block font-semibold text-blue-700 text-sm mb-1">
                  Country <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="relative w-full mb-4">
                <label className="block font-semibold text-blue-700 text-sm mb-1">
                  Address
                </label>
                <input
                  type="text"
                  className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="relative w-full mb-4">
                <label className="block font-semibold text-blue-700 text-sm mb-1">
                  Established Year <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>

            <div className="relative w-full mb-4">
              <label className="block font-semibold text-blue-700 text-sm mb-1">
                Logo <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                onChange={(e) => setLogo(e.target.files[0])}
                className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
              />
            </div>

            {logoUploadProgress > 0 && logoUploadProgress > 100 && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logo upload progress bar
                </label>
                <progress
                  value={logoUploadProgress}
                  max="100"
                  className="mt-4 bg-green-400 rounded-lg border-none max-w-lg w-full"
                />
              </div>
            )}

            {logoUploadProgress === 100 && (
              <p className="text-green-600 mb-3">Uploaded Successfully</p>
            )}

            {logoUrl && <img src={logoUrl} className="h-10" alt="logo" />}

            <div className="relative w-full mb-4">
              <label className="block font-semibold text-blue-700 text-sm mb-1">
                Photos <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                multiple
                className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
              />
            </div>

            <div className="relative w-full mb-4">
              <label className="block font-semibold text-blue-700 text-sm mb-1">
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                className="px-3 py-3 bg-[#f5f8fa] rounded text-sm w-full focus:outline-none border"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCollege;
