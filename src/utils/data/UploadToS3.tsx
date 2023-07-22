
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
const { REACT_APP_PERMISSIONS_BUCKET_ACCESS_KEY, REACT_APP_PERMISSIONS_BUCKET_SECRET_KEY, REACT_APP_PERMISSIONS_BUCKET_REGION, REACT_APP_PERMISSIONS_BUCKET_NAME } = process.env;


const client = new S3Client({
    credentials: {
        accessKeyId: REACT_APP_PERMISSIONS_BUCKET_ACCESS_KEY as string,
        secretAccessKey: REACT_APP_PERMISSIONS_BUCKET_SECRET_KEY as string,
    },
    region: REACT_APP_PERMISSIONS_BUCKET_REGION as string
});

export const uploadToS3 = async (name: string, file: any) => {
    const command = new PutObjectCommand({
        Bucket: REACT_APP_PERMISSIONS_BUCKET_NAME,
        Key: name,
        Body: file,
    });

    try {
        const response = await client.send(command);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};
