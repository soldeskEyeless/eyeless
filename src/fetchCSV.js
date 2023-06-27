import axios from "axios";
import RNFS, { readFileRes } from "react-native-fs";
import RNFetchBlob from "rn-fetch-blob";

export const fetchCSV = async () => {
  const serverURL = 'http://54.180.155.83:3000/download';
  const savePath = `${RNFetchBlob.fs.dirs.DocumentDir}/article.csv`;

  try {
    const response = await RNFetchBlob.config({
      fileCache: true,
      path: savePath,
    }).fetch('GET', serverURL);
    console.log('CSV 파일 다운로드 및 저장 완료:', savePath);
    
    return savePath;
  } catch (error) {
    console.log('CSV 파일 다운로드 및 저장 실패:', error);
  }
};