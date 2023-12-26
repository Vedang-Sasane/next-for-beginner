"use client";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useState } from "react";

const page = () => {
  const [images, setImages] = useState([]);
  const movie1 = "The Marvels";
  const movie2 = "Tiger 3";
  const getImages = async () => {
    console.log("Images are here.");
    const response = await axios.get("https://picsum.photos/v2/list");
    const data = response.data;
    setImages(data);
    console.log(images);
  };
  return (
    <>
      <h1>This is Home Page.</h1>
      {/* <a href="/About">About</a>
      <a href="/Courses">Courses</a>
      <a href="/Contact">Contact</a> */}
      Both {movie1} & {movie2} are flop movies. I am crying very hard.
      <button onClick={getImages}>Get Images</button>
      <div>
        {images.map((img, i) => {
          return (
            <img key={i} src={img.download_url} width={300} height={300} />
          );
        })}
      </div>
    </>
  );
};

export default page;
