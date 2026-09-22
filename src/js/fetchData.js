function fetchSheetJSONP(sheetName, callback) {
  const sheetId = '1mEUi9qemf5EoOcNaTFw0Q-iUqgJZqOfAYf4IoHE2ePw';

  const callbackName = 'gvizCallback_' + Math.random().toString(36).slice(2);

  window[callbackName] = function (response) {
    const rows = response.table.rows.map(row =>
      row.c.map(cell => cell?.v ?? null)
    );
    callback(rows);
    delete window[callbackName];
    script.remove();
  };

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq` +
    `?tqx=out:json;responseHandler:${callbackName}` +
    `&sheet=${encodeURIComponent(sheetName)}`;

  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}

// usage
fetchSheetJSONP('Conferences', rows => {
  console.log(rows);
});