module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'us-east-1' env('AWS_BUCKET_REGION'),
      params: {
        Bucket: 'cdn.probablybad.com' env('AWS_BUCKET_NAME'),
      },
    }
  }
});