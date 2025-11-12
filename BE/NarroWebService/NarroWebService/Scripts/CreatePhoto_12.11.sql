-- Table: public.Photo

-- DROP TABLE IF EXISTS public."Photo";

CREATE TABLE IF NOT EXISTS public."Photo"
(
    "Id" uuid NOT NULL,
    "Path" text COLLATE pg_catalog."default" NOT NULL,
    "FallbackText" text COLLATE pg_catalog."default" NOT NULL DEFAULT 'Nice Picture'::text,
    CONSTRAINT "Photo_pkey" PRIMARY KEY ("Id")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Photo"
    OWNER to postgres;