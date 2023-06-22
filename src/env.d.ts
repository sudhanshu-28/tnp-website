///  <reference types="@astrojs/image/client" />

import type { ChartData } from "chart.js";

export type TestimonialType = {
    info: string;
    photo: string;
    name: string;
    position: string;
  }

export type StaffTNP = {
  StaffName: string;
  designation: string;
  staffPhoto: string;
  experties: string;
};
  
export type link = {
  title: string;
  link: string;
  subLinks?: link[];
}

export type imageLink =  {
  img: string;
  alt: string
} 

export interface EventType {
  title: string;
  slug: string;
  purpose: string;
  objective: string[];
  outcomes?: string[];
  photos: imageLink[];
  testiomonials?: EventTestimonialType[];
  data?: ChartData<"bar", number[], string>;
}

export type EventTestimonialType = {
  name: string,
  photo: string,
  review: string,
  position: string,
  department: string
}

export interface CompanyCardType {
  name: string;
  img: string;
}

export type IndustryInteractionType = {
  companyLogo: string;
  companyName: string;
  themeColor: string;
  description: string;
  subdescription: string;
  eventImages: imageLink[];
}

