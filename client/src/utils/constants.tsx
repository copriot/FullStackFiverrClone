import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaPenFancy,
  FaVideo,
  FaRobot,
  FaMusic,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";
import type { ICategory, IInfo, IInput } from "../types";

export const categories: ICategory[] = [
  { name: "Programming and Technology", icon: <FaCode /> },
  { name: "Graphics and Design", icon: <FaPaintBrush /> },
  { name: "Digital Marketing", icon: <FaBullhorn /> },
  { name: "Writing and Translation", icon: <FaPenFancy /> },
  { name: "Video and Animation", icon: <FaVideo /> },
  { name: "Artificial Intelligence Services", icon: <FaRobot /> },
  { name: "Music and Audio", icon: <FaMusic /> },
  { name: "Business", icon: <FaBriefcase /> },
  { name: "Consulting", icon: <FaUserTie /> },
];

export const items: IInfo[] = [
  {
    title: "Expert recruitment consultants",
    text: "Rely on an account manager to help you find the right talent and meet every need of your project.",
  },
  {
    title: "Satisfaction guarantee",
    text: "Order with confidence with guaranteed refunds for incomplete deliveries.",
  },
  {
    title: "Advanced management tools",
    text: "Seamlessly integrate freelancers into your team and projects.",
  },
  {
    title: "Flexible payment models",
    text: "Pay per project or choose hourly rates for longer-term collaborations.",
  },
];

export const inputs: IInput[] = [
  {
    label: "Title",
    name: "title",
    required: true,
  },
  {
    label: "Cover Image",
    name: "coverImage",
    required: true,
    type: "file",
  },
  {
    label: "Images",
    name: "images",
    required: true,
    type: "file",
    multiple: true,
  },
  {
    label: "Number of Revisions",
    name: "packageRevisions",
    required: true,
    type: "number",
    min: 1,
  },
  {
    label: "Features (separate with ',')",
    name: "packageFeatures",
    required: true,
    type: "textarea",
  },
  {
    label: "Description",
    name: "description",
    required: true,
    type: "textarea",
  },
  {
    label: "Package Description",
    name: "packageDescription",
    required: true,
  },
  {
    label: "Package Title",
    name: "packageTitle",
    required: true,
  },
  {
    label: "Delivery Time (days)",
    name: "packageDuration",
    required: true,
    type: "number",
    min: 1,
    max: 90,
  },
  {
    label: "Price ($)",
    name: "packagePrice",
    type: "number",
    required: true,
    min: 1,
  },
];
