import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
// Create an instance of the S3 Client using environment variables
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Function to upload files to S3 and return the file URL
export const uploadToS3 = async (fileBuffer, fileName, fileType, filePath) => {
  const params = {
    Bucket: process.env.S3_BUCKET, // Specify the S3 bucket
    Key: filePath, // File path inside the bucket
    Body: fileBuffer, // File buffer to upload
    ContentType: fileType, // Content type of the file
    ACL: 'public-read', // Make the file publicly accessible
  };

  try {
    const command = new PutObjectCommand(params); // Create S3 command
    await s3Client.send(command); // Send the command to upload the file
    return `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${filePath}`; // Return the file URL
  } catch (err) {
    throw new Error(`Error uploading file to S3: ${err.message}`); // Handle errors
  }
};
