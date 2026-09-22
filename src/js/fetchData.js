const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
const apiKey = 'AIzaSyB3dYagFFdFr9P1W7sl56vhxs9JglB0HUg';
const sheetId = '1mEUi9qemf5EoOcNaTFw0Q-iUqgJZqOfAYf4IoHE2ePw';
  
const getAllPages = async () => {
  const pages = await fetch(`${baseUrl}/${sheetId}?key=${apiKey}`).then(res => res.json());
  return pages.sheets;
}

async function getSheetData(sheetName) {
  const url = `${baseUrl}/${sheetId}/values/${encodeURIComponent(sheetName)}?key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.values; // array of arrays — one array per row
}