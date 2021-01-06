if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  module.exports = {
    provider: "local",
    providerOptions: {}
  };
} else if (process.env.NODE_ENV === "production") {
  module.exports = {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_ACCESS_SECRET,
      region: process.env.AWS_BUCKET_REGION,
      params: {
        Bucket: process.env.AWS_BUCKET_NAME,
      },
    },
    
    provider: "cloudinary",
    providerOptions: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    }
  };
}
