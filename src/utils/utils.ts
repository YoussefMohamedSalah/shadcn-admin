// import { Order } from "../models/order";
// import { Orders, Pages } from "../constants/enums";
// import { HeadCell } from "../models/dataTable";
// import * as XLSX from "xlsx";

// import { format } from 'date-fns';

// Utility function to format date
export const formatDateForInput = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // 'yyyy-MM-dd' format
};


export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

/**
 * Convert string hours to it's equivalent in numbers
 *
 * @param hours hours: string
 * @param format format: string
 *
 * @returns number
 */
export const hoursStringToNumber = (hours: string, format: string): number => {
  const time = hours.split(":")[0];

  return format === "PM"
    ? parseInt(time) + 12 === 24
      ? 12
      : parseInt(time) + 12
    : parseInt(time) === 12
      ? 0
      : parseInt(time);
};

/**
 * Compare giver hour in number to current locale hour
 *
 * @param hour hour: number
 *
 * @returns number
 */
export const compareHoursToCurrent = (hour: number): number => {
  const d = new Date();
  let currentHour = d.getHours();

  return hour - currentHour;
};

/**
 * Capitalize first letter of a given string
 *
 * @param string string: string
 *
 * @returns string
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// export function getComparator<Key extends keyof any>(
//   order: Order,
//   orderBy: Key
// ): (
//   a: { [key in Key]: number | string },
//   b: { [key in Key]: number | string }
// ) => number {
//   return order === Orders.DSC
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

export function stableSort(array: any[], comparator: any) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function stripHtml(html: string) {
  return html.replace(/(<([^>]+)>)/gi, "");
}

// export function exportXLSX(
//   slug: string,
//   headCells: readonly HeadCell[],
//   data: any[],
//   rowKeys: readonly string[],
//   selected?: Set<string>,
//   filename?: string
// ) {
//   const heads: any = [];
//   const rows: any = [];

//   let exportData =
//     slug === Pages.BOOKINGS_LIST
//       ? stableSort(data, getComparator(Orders.ASC, "date"))
//       : stableSort(data, getComparator(Orders.ASC, "createdAt"));

//   // console.log({ exportData });

//   if (selected) {
//     exportData = data.filter((row: any) => selected.has(row.id));
//   }

//   for (let i = 0; i < headCells.length - 1; i++) {
//     // csv format doesn't accept empty symbols
//     headCells[i].label === "# of Guests"
//       ? heads.push("Number of Guests")
//       : heads.push(headCells[i].label);
//   }

//   rows.push(heads);

//   if (slug === Pages.BOOKINGS) {
//     for (let row of exportData) {
//       const rowItems: any = [];

//       if (row.conceptName) {
//         rowItems.push(row.conceptName ? row.conceptName : "");
//       }

//       // rowItems.push(row.timeSlotName ? row.timeSlotName : "");
//       rowItems.push(
//         row.slotNames ? mergeListOfStringsByDash(row.slotNames) : ""
//       );
//       rowItems.push(
//         row.customerName ? capitalizeFirstLetter(row.customerName) : ""
//       );
//       rowItems.push(row.customerGroup ? row.customerGroup : "");
//       rowItems.push(row.customerPhone ? row.customerPhone : "");
//       rowItems.push(row.accompaniedCount ? row.accompaniedCount : "");
//       rowItems.push(row.tableName ? row.tableName : "");
//       rowItems.push(row.statusName ? row.statusName : "");
//       // rowItems.push(row.lastComment ? stripHtml(row.lastComment) : "");
//       rowItems.push(
//         row.commentsTexts ? mergeListOfStringsByDash(row.commentsTexts) : ""
//       );
//       rowItems.push(row.date);
//       rowItems.push(row.createdBy ? row.createdBy.name : "Admin");
//       rowItems.push(row.createdAt.split(",")[0]);

//       rows.push(rowItems);
//     }
//   } else {
//     for (let row of exportData) {
//       const rowItems: any = [];

//       for (let key of rowKeys) {
//         rowItems.push(row[key]);
//       }

//       rowItems.push(row.groupName ? row.groupName : "");
//       rowItems.push(
//         row.interestsName ? mergeListOfStringsByDash(row.interestsName) : ""
//       );

//       rowItems.push(row.createdByName ? row.createdByName : "Admin");
//       rowItems.push(row.createdAt.split(",")[0]);

//       rows.push(rowItems);
//     }
//   }

//   const wb = XLSX.utils.book_new();
//   const newWs = XLSX.utils.aoa_to_sheet(rows);
//   XLSX.utils.book_append_sheet(wb, newWs);
//   const rawExcel = XLSX.write(wb, { type: "base64" });

//   const encodedUri = encodeURI(rawExcel);
//   const link = document.createElement("a");
//   link.setAttribute(
//     "href",
//     "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," +
//       encodedUri
//   );
//   link.setAttribute("download", `${filename ? filename : slug}.xlsx`);
//   document.body.appendChild(link); // Required for FF

//   link.click();
// }

export function randomStr(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// return full date into string
export function isoFullDateFormated(isoFullDate: string) {
  // insert format "2023-01-15:15:52";
  const isoNewDate = new Date(isoFullDate);
  return isoNewDate;
}

export const formatAMPM = (isoDate: string) => {
  const date = new Date(isoDate);
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;

  return strTime;
};

export function getWeekDays(locale: string) {
  const baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(locale, { weekday: "long" }));
    baseDate.setDate(baseDate.getDate() + 1);
  }

  return weekDays;
}

export function getDayName(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "short" });
}

export function getDayNameLong(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

export function getDayNumber(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.getDate();
}

export function getMonthName(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { month: "short" });
}

export function getDateFormatted(date: Date) {
  const today = date ? new Date(date) : new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
}

// get hours and minutes
export function getFullDateFormatted(date: Date) {
  const today = date ? new Date(date) : new Date();
  const hh = String(today.getHours()).padStart(2, "0");
  const min = String(today.getMinutes()).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  return yyyy + "-" + mm + "-" + dd + ":" + hh + ":" + min;
}

export function capitalizeWords(string: string) {
  return string.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

export const mergeListOfStringsByDash = (list: string[] | null) => {
  if (list !== null && list.length)
    return list.reduce((prev, current) => `${prev} - ${current}`);

  return "";
};

export const mergeListOfStrings = (
  list: (string | null)[],
  delimiter: string
) => {
  if (list !== null && list.length)
    return list.reduce((prev, current) => `${prev} ${delimiter} ${current}`);

  return "";
};

export const makeFakePhoneNumbers = (index: number, length: number) => {
  var result = `01${index}`;
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getDomainName = () => {
  if (window.location.hostname === "kioskdev") return "kioskdev";

  if (
    window.location.hostname === "192.168.1.71" ||
    window.location.hostname === "localhost" ||
    window.location.hostname === "main.d1uxgdbmrbcym6.amplifyapp.com" ||
    window.location.hostname === "main.drwxy8igs4w9j.amplifyapp.com" ||
    window.location.hostname === "www.baky.anyware.software" ||
    window.location.hostname === "baky.anyware.software" ||
    window.location.hostname ===
    "performance-fix.drwxy8igs4w9j.amplifyapp.com" ||
    window.location.hostname === "new-stag.drwxy8igs4w9j.amplifyapp.com"
  )
    return "anyware";

  if (
    window.location.hostname === "192.168.42.194:3000" ||
    window.location.hostname === "prod.d1uxgdbmrbcym6.amplifyapp.com"
  )
    return "anyware";

  return window.location.hostname;
};

export const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === "kioskdev" ||
  // [::1] is the IPv6 kioskdev address.
  window.location.hostname === "[::1]" ||
  // 127.0.0.0/8 are considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  ) ||
  window.location.hostname.match(
    /^192(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

export const isProduction = Boolean(
  window.location.hostname === "192.168.42.194:3000" ||
  window.location.hostname === "www.baky.anyware.software" ||
  window.location.hostname === "baky.anyware.software"
);

export const createArray = (size: number) =>
  Array.from({ length: size }, (_, i) => i);

export function convertToCamelCase(text: string) {
  return text.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

export function extractSelectedCheckboxes(keyName: string, data: any) {
  const selected: string[] = [];

  for (let key of Object.getOwnPropertyNames(data)) {
    if (key.includes(keyName)) {
      if (data[key] === true) {
        selected.push(key.replace(keyName, ""));
      }
    }
  }

  return selected;
}
//  original validation
// export function validatePhone(phone: string) {
//   const localAndInternational =
//     /(^[1-9]\d{9}$|^[1-9]\d{9}$|^(\+|00)[0-9]{12,14}$)/;
//   return localAndInternational.test(phone);
// }

// international validation

export function validatePhone(phone: string) {
  const localAndInternational =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  return localAndInternational.test(phone);
}

export async function clearBrowser() {
  // clear localStorage
  window.localStorage.clear();

  // clear sessionStorage
  window.sessionStorage.clear();

  // reload
  window.location.reload();
}

export function hexEncode(str: string) {
  var hex, i;

  var result = "";
  for (i = 0; i < str.length; i++) {
    hex = str.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }

  return result;
}

export function hexDecode(hexString: string) {
  var j;
  var hexes = hexString.match(/.{1,4}/g) || [];
  var back = "";
  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return back;
}

export function isNumeric(num: string) {
  return !isNaN(parseInt(num));
}

export function persistBookingDate(date: Date): Date {
  const storageDate: string | null = localStorage.getItem("bookingsDate");

  // // console.log({ storageDate });

  return storageDate ? new Date(storageDate) : date;
}

export function excerpt(str: string, maxLength: number): string {
  if (str.length > maxLength) return str.substring(0, maxLength) + "...";

  return str;
}

export function isEquivalentArrays(arr1: string[], arr2: string[]): boolean {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let prob = arr1[i];

    if (arr2.indexOf(prob) === -1) return false;
  }

  return true;
}

export const getFileSize = (size: number) => {
  if (size < 1024) return `${size} B`;
  if (size >= 1024 && size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  if (size >= 1024 * 1024 && size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
};

export const isUUID = (uuid: string): boolean => {
  const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return regex.test(uuid);
}
