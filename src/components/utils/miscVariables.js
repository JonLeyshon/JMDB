export const APIKEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjUyOTgyYzFlN2ZmMzk4NTc4MmFiM2E4YzgxNTk2YiIsInN1YiI6IjYzZmNmYTk1MzQ0YThlMDBjZGNkMWRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Boz9QocZw9sLyvfezIpclLW0SENxdQesDGVDcmA3GSE";

const url = window.location.href;
const parts = url.split("/");
export const urlID = parts[parts.length - 1];
