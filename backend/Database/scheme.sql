CREATE TABLE wards(
  id SERIAL PRIMARY KEY,
  name TEXT,
  latitude FLOAT,
  longitude FLOAT
);

CREATE TABLE pollutiondata(
  id SERIAL PRIMARY KEY,
  ward_id INT REFERENCES wards(id),
  pm25 FLOAT,
  pm10 FLOAT,
  no2 FLOAT,
  co2 FLOAT,
  timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sources(
  id SERIAL PRIMARY KEY,
  ward_id INT REFERENCES wards(id),
  category TEXT,
  severity TEXT,
  description TEXT
);

CREATE TABLE reports(
  id SERIAL PRIMARY KEY,
  ward_id INT REFERENCES wards(id),
  issue_type TEXT,
  description TEXT,
  status TEXT
);
