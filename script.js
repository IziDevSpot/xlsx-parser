document.getElementById('fileInput').addEventListener('change', handleFile);

function handleFile(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = XLSX.utils.sheet_to_html(sheet);
    };
    
    reader.readAsArrayBuffer(file);
  } else {
    alert('No file selected');
  }
}
