import http from '@/service/http';

const saveShareContent = (content, fileName) => {
  const downLink = document.createElement('a');
  downLink.download = fileName;
  const blob = new Blob([content], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
  });
  downLink.href = URL.createObjectURL(blob);
  document.body.appendChild(downLink);
  downLink.click();
  document.body.removeChild(downLink);
};

export default (url = '', data = {}) => {
  http.postDowndata(url, data, true).then((res) => {
    if (res) {
      const headerName = decodeURIComponent(res.headers['content-disposition']);
      const filename = headerName.match(/filename=(.+$)/i);
      const defaultFilename = 'template.xls';
      saveShareContent(res.data, filename ? filename[1] : defaultFilename);
    }
  });
};
