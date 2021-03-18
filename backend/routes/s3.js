import fs from "fs";
import AWS from "aws-sdk";

const bucketName = "tradepoint2020";
const region = "eu-west-2";
const accessKeyId = "AKIATOWZM6QE5VOKBKK3";
const secretAccessKey = "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";

const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3
export function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}

// downloads a file from s3
export function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}
