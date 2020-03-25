function getReadFile(reader, i) {
  return function () {
    var li = document.querySelector('[data-idx="' + i + '"]');
    li.innerHTML += '<br>Arquivo inicia com "' + reader.result.substr(0, 25) + '"';
  }
}

function readFiles(files) {
  document.getElementById('count').innerHTML = files.length;
  let target = document.getElementById('target');
  target.innerHTML = '';

  for (var i = 0; i < files.length; ++i) {
    var item = document.createElement('li');
    item.setAttribute('data-idx', i);
    var file = files[i];
    var reader = new FileReader();
    reader.addEventListener('load', getReadFile(reader, i));
    reader.readAsText(file);
    item.innerHTML = '' + file.name + ', ' + file.type + ', ' + file.size + ' bytes, última vez modificado em ' + file.lastModifiedDate + '';
    target.appendChild(item);
  };
}

async function writeFile() {
  if (!window.chooseFileSystemEntries) {
    alert('API Nativa não suportada');
    return;
  }
  
  const target = document.getElementById('target');
  target.innerHTML = 'Abrindo o arquivo...';
  
  const handle = await window.chooseFileSystemEntries({
    type: 'saveFile',
  });
  
  const file = await handle.getFile()
  const writer = await handle.createWriter();
  await writer.write(0, 'Resposta chegando');
  await writer.close()
  
  target.innerHTML = 'Conteúdo escrito no arquivo ' + file.name + '.';
}