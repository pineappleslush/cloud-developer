export const config = {
  // "dev": {
  //   "username": "udagramlanidev",
  //   "password": "udagramlanidev",
  //   "database": "udagramlanidev",
  //   "host": "udagramlanidev.csknaypoy9w0.us-west-1.rds.amazonaws.com",
  //   "dialect": "postgres",
  //   "aws_region": "us-west-1",
  //   "aws_profile": "UdacityAdmin",
  //   "aws_media_bucket": "udagram-lani-dev"
  // },
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"
  }
}
