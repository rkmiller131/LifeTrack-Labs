DROP DATABASE IF EXISTS lifetrack;

CREATE DATABASE lifetrack;

DROP TABLE IF EXISTS relatedrationale;
DROP TABLE IF EXISTS quizanatomy;
DROP TABLE IF EXISTS pppsummary;

CREATE TABLE pppsummary (
  id INT PRIMARY KEY,
  category VARCHAR(255),
  summary TEXT
);

COPY pppsummary FROM '/Users/rachel/Desktop/SoloWork/LifeTrack-Labs/server/database/pppsummary.csv'
  DELIMITER ',' QUOTE '"' CSV HEADER;

CREATE TABLE quizanatomy (
  id INT PRIMARY KEY,
  category_id INT,
  labs TEXT[],
  rationale TEXT,
  related INT,

  FOREIGN KEY (category_id) REFERENCES pppsummary(id)
);

COPY quizanatomy FROM '/Users/rachel/Desktop/SoloWork/LifeTrack-Labs/server/database/quizanatomy.csv'
  DELIMITER ',' QUOTE '"' CSV HEADER NULL AS 'null';

CREATE TABLE relatedrationale (
  id INT PRIMARY KEY,
  rationale TEXT
);

COPY relatedrationale FROM '/Users/rachel/Desktop/SoloWork/LifeTrack-Labs/server/database/relatedrationale.csv'
  DELIMITER ',' QUOTE '"' CSV HEADER;

CREATE TABLE quizcontent (
  id INT,
  question_no VARCHAR(255),
  q1 TEXT,
  q2 TEXT,
  q3 TEXT,
  q4 TEXT,
  q5 TEXT,
  ratings TEXT[]
);

COPY quizcontent FROM '/Users/rachel/Desktop/SoloWork/LifeTrack-Labs/server/database/quizcontent.csv'
  DELIMITER ',' QUOTE '"' CSV HEADER;

CREATE TABLE userinfo (
  id serial PRIMARY KEY,
  email VARCHAR(255),
  results JSONB,
  response JSONB
);