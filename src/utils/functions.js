export function formatUnixDate(unixTime) {
  const date = new Date(unixTime * 1000); // Convert from seconds to milliseconds
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function truncateString({ str, limit = 50, trail = '...' }) {
  if (isStringEmpty(str)) {
    return '';
  }
  return str?.length > limit ? `${str.substring(0, limit)}${trail}` : str;
}

function isStringEmpty(str) {
  return str === undefined || str === null || !str.trim();
}