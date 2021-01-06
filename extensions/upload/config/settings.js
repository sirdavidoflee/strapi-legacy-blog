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
    }
  };
}
