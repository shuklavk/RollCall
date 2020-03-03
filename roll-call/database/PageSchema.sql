DROP DATABASE IF EXISTS pages;

CREATE DATABASE pages;

USE pages;

CREATE TABLE pageInfo (
  id int NOT NULL AUTO_INCREMENT,
  document VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- To put schema into database:
-- mysql -u root -p < database/PageSchema.sql
-- /var/folders/5q/h5mgrl3x0ms6dznj_p3y6y_h0000gn/T/upload_3a54356335f3c2db9e470d3bb42d3273
-- insert into pageInfo (blobcol) values (LOAD_FILE('/var/folders/5q/h5mgrl3x0ms6dznj_p3y6y_h0000gn/T/upload_3a54356335f3c2db9e470d3bb42d3273');