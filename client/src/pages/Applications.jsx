import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your resume</h2>
        <div className="flex  gap-4 mb-6 mt-4">
          {isEdit ? (
            <>
            <label className="flex items-center" htmlFor="resumeUpload" >
              <p className="bg-blue-100 , text-blue-600 px-4 py-2 rounded-lg mr-2" >Select Resume</p>
              <input id="resumeUpload" onChange={e => setResume(e.target.files[0])} accept="application/pdf" type="file" hidden />
              <img src={assets.profile_upload_icon} />

            </label>
            <button onClick={e => setIsEdit(false)} className="bg-green-200 border border-green-500 py-2 px-4 rounded" >Save</button>

            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                href=""
              >
                Resume
              </a>
              <button onClick={() => setIsEdit(true)} className="text-gray-500 border border-gray-400 px-4 py-2 rounded">Edit</button>
            </div>
          )}
        </div>

         <h2 className="text-xl font-semibold mb-4"> Jobs Applied</h2>

         <table className="min-w-full bg-white border-2 border-gray-200 rounded-lg  " >
          <thead>
            <tr>
              <th className="px-4 py-3 border-b border-gray-200 text-left" >Company</th>
              <th  className="px-4 py-3 border-b border-gray-200 text-left">Job Title</th>
              <th  className="px-4 py-3 border-b border-gray-200 text-left max-sm:hidden">Location</th>
              <th  className="px-4 py-3 border-b border-gray-200 text-left max-sm:hidden">Date</th>
              <th  className="px-4 py-3 border-b border-gray-200 text-left">Status</th>

            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job , index) => true ? (
              <tr>
                <td className="px-4 py-3 border-b border-gray-200 flex items-center gap-2" >
                  <img className="w-8 h-8" src={job.logo}  />
                  {job.company} 
                </td>
                <td className="px-4 py-3 border-b border-gray-200">{job.title}</td>
                <td className="px-4 py-3 border-b border-gray-200 max-sm:hidden">{job.location}</td>
                <td className="px-4 py-3 border-b border-gray-200 max-sm:hidden">{moment(job.date).format('ll')}</td>
                <td className="px-4 py-3 border-b border-gray-200">
                <span className={`text-sm font-semibold px-4 py-1.5 rounded-lg ${job.status === "Accepted" ? "bg-green-100" : job.status === "Rejected" ? "bg-red-100" : "bg-blue-100"}`} >
                {job.status}

                </span>
                </td>

              </tr>
            ) : (null))}
          </tbody>
         </table>


      </div>

      <Footer />
    </>
  );
};

export default Applications;
