"use client";
import { saveJobAction } from "@/app/actions/jobActions";
import ImageUpload from "@/app/components/ImageUpload";
import type { Job } from "@/models/Job";
import {
  faBuilding,
  faEnvelope,
  faMobile,
  faPerson,
  faPhone,
  faStar,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  RadioGroup,
  TextArea,
  TextField,
  Theme,
} from "@radix-ui/themes";
import { redirect } from "next/navigation";
import { useState } from "react";
import "react-country-state-city/dist/react-country-state-city.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons/faBusinessTime";
import { faClipboard, faImage } from "@fortawesome/free-regular-svg-icons";

export default function JobForm({
  orgId,
  jobDoc,
}: {
  orgId: string;
  jobDoc?: Job;
}) {
  const [countryId, setCountryId] = useState(jobDoc?.countryId || 0);
  const [stateId, setStateId] = useState(jobDoc?.stateId || 0);
  const [cityId, setCityId] = useState(jobDoc?.cityId || 0);
  const [countryName, setCountryName] = useState(jobDoc?.country || "");
  const [stateName, setStateName] = useState(jobDoc?.state || "");
  const [cityName, setCityName] = useState(jobDoc?.city || "");

  async function handleSaveJob(data: FormData) {
    data.set("country", countryName.toString());
    data.set("state", stateName.toString());
    data.set("city", cityName.toString());
    data.set("countryId", countryId.toString());
    data.set("stateId", stateId.toString());
    data.set("cityId", cityId.toString());
    data.set("orgId", orgId);
    const jobDoc = await saveJobAction(data);
    redirect(`/jobs/${jobDoc.orgId}`);
  }

  return (
    <Theme>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#6B2E91" }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-16 mt-10">
          <div className="flex">
            {/* Left Side - Form */}
            <div className="flex-1 pr-4">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  await handleSaveJob(formData);
                }}
                className="flex flex-col gap-4 ml-16"
              >
                <div className="w-1/3 flex flex-col items-center ml-60 mt-2">
                  <h3 className=" mb-4 font-medium text-lg">Company Logo</h3>
                  <ImageUpload
                    name="jobIcon"
                    icon={faImage}
                    defaultValue={jobDoc?.jobIcon || ""}
                  />
                </div>
                <div className="mt-2"></div>
                {jobDoc && (
                  <input type="hidden" name="id" value={jobDoc?._id} />
                )}
                <TextField.Root
                  name="title"
                  placeholder="Job title"
                  defaultValue={jobDoc?.title || ""}
                  style={{ width: "701px" }}
                />

                <div className="grid grid-cols-2 mt-6 mb-2">
                  <div>
                    <div className="mb-3 font-medium">
                      Work location or environment
                    </div>
                    <RadioGroup.Root
                      defaultValue={jobDoc?.remote || "hybrid"}
                      name="remote"
                    >
                      <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
                      <RadioGroup.Item value="hybrid">
                        Hybrid-remote
                      </RadioGroup.Item>
                      <RadioGroup.Item value="remote">
                        Fully remote
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                  </div>
                  <div>
                    <div className="mb-3 font-medium">Expected work hours</div>
                    <RadioGroup.Root
                      defaultValue={jobDoc?.type || "full"}
                      name="type"
                    >
                      <RadioGroup.Item value="project">Project</RadioGroup.Item>
                      <RadioGroup.Item value="part">Part-time</RadioGroup.Item>
                      <RadioGroup.Item value="full">Full-time</RadioGroup.Item>
                    </RadioGroup.Root>
                  </div>
                </div>

                <div className="font-medium">
                  Salary
                  <div className="mt-3"></div>
                  <TextField.Root
                    name="salary"
                    defaultValue={jobDoc?.salary || ""}
                    style={{ width: "702px" }}
                  >
                    <TextField.Slot>$</TextField.Slot>
                    <TextField.Slot>k/year</TextField.Slot>
                  </TextField.Root>
                </div>


                

                <div className="font-medium mb-2">
                  Location
                  <div className="mt-3"></div>
                  <div className="flex flex-col sm:flex-row gap-8">
                    <CountrySelect
                      defaultValue={
                        countryId ? { id: countryId, name: countryName } : 0
                      }
                      onChange={(e: any) => {
                        setCountryId(e.id);
                        setCountryName(e.name);
                      }}
                      placeHolder="Select Country"
                    />
                    <StateSelect
                      defaultValue={
                        stateId ? { id: stateId, name: stateName } : 0
                      }
                      countryid={countryId}
                      onChange={(e: any) => {
                        setStateId(e.id);
                        setStateName(e.name);
                      }}
                      placeHolder="Select State"
                    />
                    <CitySelect
                      defaultValue={cityId ? { id: cityId, name: cityName } : 0}
                      countryid={countryId}
                      stateid={stateId}
                      onChange={(e: any) => {
                        setCityId(e.id);
                        setCityName(e.name);
                      }}
                      placeHolder="Select City"
                    />
                  </div>
                </div>








                <div className="sm:flex">
                  <div className="grow">
                    <h3 className="font-medium mb-5">Contact person</h3>
                    <div className="flex gap-2">
                      <div>
                        <ImageUpload
                          name="contactPhoto"
                          icon={faUser}
                          defaultValue={jobDoc?.contactPhoto || ""}
                        />
                      </div>
                      <div className="grow flex flex-col gap-2 ml-10">
                        <TextField.Root
                          placeholder="John Doe"
                          name="contactName"
                          defaultValue={jobDoc?.contactName || ""}
                          style={{ width: "560px" }}
                        >
                          <TextField.Slot>
                            <FontAwesomeIcon icon={faUser} />
                          </TextField.Slot>
                        </TextField.Root>
                        <TextField.Root
                          placeholder="Phone"
                          type="tel"
                          name="contactPhone"
                          defaultValue={jobDoc?.contactPhone || ""}
                          style={{ width: "560px" }}
                        >
                          <TextField.Slot>
                            <FontAwesomeIcon icon={faPhone} />
                          </TextField.Slot>
                        </TextField.Root>
                        <TextField.Root
                          placeholder="Email"
                          type="email"
                          name="contactEmail"
                          defaultValue={jobDoc?.contactEmail || ""}
                          style={{ width: "560px" }}
                        >
                          <TextField.Slot>
                            <FontAwesomeIcon icon={faEnvelope} />
                          </TextField.Slot>
                        </TextField.Root>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3"></div>
                <TextArea
                  defaultValue={jobDoc?.description || ""}
                  placeholder="Job description"
                  resize="vertical"
                  name="description"
                  style={{ width: "705px" }}
                />
                <div className="flex justify-center mt-4 -ml-20">
                  <Button size="3" type="submit">
                    <span className="px-8">Save</span>
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Side - Image Section */}
            <div className="w-1/3 bg-gray-50 flex items-center justify-center rounded-lg">
              <div className="mt-2">
                <h3
                  className="text-5xl -mt-56 font-medium text-center"
                  style={{ lineHeight: "1.1" }}
                >
                  About <span className="text-blue-700">Job</span> <br />{" "}
                  Vacancy
                </h3>

                <p className="mt-10 mx-7 text-xl text-gray-500 text-left ">
                  Enter the basic details about job vacancy in your company to
                  proceed further
                </p>

                <div className="flex justify-center">
                  <img
                    src="https://res.cloudinary.com/dfxvo7zy3/image/upload/v1735140175/Jobstream/k1dbxsqshsylpyal3urr.jpg"
                    alt="Job Icon"
                    className="object-cover rounded-lg mt-24"
                    width={800}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Theme>
  );
}
