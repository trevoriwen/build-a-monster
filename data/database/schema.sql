-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/n2yNcq
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "cr_to_xp" (
    "cr" decimal   NOT NULL,
    "xp" int   NOT NULL,
    CONSTRAINT "pk_cr_to_xp" PRIMARY KEY (
        "cr"
     )
);

CREATE TABLE "monster_stats" (
    "name" varchar   NOT NULL,
    "url" varchar   NOT NULL,
    "cr" decimal   NOT NULL,
    "type" varchar   NOT NULL,
    "size" varchar   NOT NULL,
    "ac" int   NOT NULL,
    "hp" int   NOT NULL,
    "cha" int   NOT NULL,
    "wis" int   NOT NULL,
    "int" int   NOT NULL,
    "con" int   NOT NULL,
    "dex" int   NOT NULL,
    "str" int   NOT NULL,
    "swim" varchar   NOT NULL,
    "fly" varchar   NOT NULL,
    "legendary" varchar   NOT NULL,
    CONSTRAINT "pk_monster_stats" PRIMARY KEY (
        "name"
     )
);

