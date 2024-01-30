import React, { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
const base_url = "http://localhost:1002";
export default function Testimonials() {
  const [testimonialData, setTestimonialData] = useState(null);

  useEffect(() => {
    async function fetchTestimonials() {
      const res = await fetch(`${base_url}/testimonials`);
      const data = await res.json();
      if (!data) {
        console.log("Error is Loading");
        return;
      } else {
        setTestimonialData(data);
      }
    }
    fetchTestimonials();
  }, [setTestimonialData]);

  if (!testimonialData) return;
  return (
    <div className={styles.testimonial}>
      <div>
        <h1>Tetsimonials</h1>
      </div>
      <div className={styles.testimonial_mainContent}>
        {testimonialData.map((el) => (
          <div key={el.id} className={styles.testimonial_container}>
            <div>
              <img src={el.image} alt="el" />
              <p>
                <p>
                  <strong>{el.name}</strong>
                </p>
                <p className={styles.prof}> {el.profession}</p>{" "}
              </p>
            </div>
            <p>{el.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
