import type { Consultant } from "@/types";

export const data: { consultants: Consultant[] } = {
  consultants: [
    {
      id: "1",
      image: "https://avatars.githubusercontent.com/u/144101438?v=4",
      firstName: "Jar jar",
      lastName: "Jarsson",
      phone: "+46-729-528-627",
      mail: "jarjar.jarsson@gmail.com",
      location: {
        address: "Somewhere 12",
        city: "Stockholm",
        country: "Sweden",
      },
      cv: "url",
      skills: ["JavaScript", 'Python', 'Matlab'],
      decription: "The best developer with media background",
      github: "https://github.com/Jarjarsson",
      linkedin: "link",
    },
  ],
};
