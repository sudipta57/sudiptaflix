import React from "react";
import styles from "@/app/styles/common.module.css";
import MovieCard from "@/app/components/movieCard";
import Loading from "../loading";

const Movie = async () => {
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
