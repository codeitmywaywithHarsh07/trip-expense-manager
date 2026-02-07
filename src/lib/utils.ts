import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// Date Utility Functions

/**
 * Format date to "25 Nov" format
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string like "25 Nov"
 */
export const formatToShortDate = (date: Date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${day} ${month}`;
};

/**
 * Format date to "25 Nov 2024" format
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string like "25 Nov 2024"
 */
export const formatToShortDateWithYear = (date: Date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

/**
 * Format date to "November 25, 2024" format
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string like "November 25, 2024"
 */
export const formatToLongDate = (date: Date) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

/**
 * Format date to "Mon, 25 Nov" format
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string like "Mon, 25 Nov"
 */
export const formatToShortDateWithDay = (date: Date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  
  return `${dayName}, ${day} ${month}`;
};

/**
 * Format date to relative time (e.g., "2 hours ago", "3 days ago")
 * @param {Date} date - Date object
 * @returns {string} - Relative time string
 */
export const formatToRelativeTime = (date: Date) => {
  const now  = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
};

/**
 * Format date to "DD/MM/YYYY" format
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string like "25/11/2024"
 */
export const formatToDDMMYYYY = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Format date to "MM/DD/YYYY" format (US format)
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string like "11/25/2024"
 */
export const formatToMMDDYYYY = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

/**
 * Get member since format (e.g., "Jan 2023")
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string like "Jan 2023"
 */
export const formatToMemberSince = (date: Date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

// Example usage:
// const date = new Date();
// console.log(formatToShortDate(date)); // "25 Nov"
// console.log(formatToShortDateWithYear(date)); // "25 Nov 2024"
// console.log(formatToLongDate(date)); // "November 25, 2024"