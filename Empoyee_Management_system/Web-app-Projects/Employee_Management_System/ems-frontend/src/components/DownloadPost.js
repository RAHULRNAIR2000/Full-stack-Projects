import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
const DownloadPost = async ({employeeName}) => {
  const canvas = await html2canvas(document.getElementById("post-template"));
  const dataURL = canvas.toDataURL('image/png');
  downloadjs(dataURL, `${employeeName}.png`, 'image/png');
};
 
export default DownloadPost