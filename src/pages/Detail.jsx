import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";

import NavbarCom from "../components/NavbarCom";

const Detail = () => {
  const [detail, setDetail] = useState("");
  const { id, media_type } = useParams();
  const { API_KEY } = useContext(Context);
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${media_type}/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  const getDetails = async () => {
    const { data } = await axios(movieDetailBaseUrl);

    setDetail(data.results);
    console.log(data);
  };
  return (
    <div>
      <NavbarCom />
      <div className="text-center container">
        <h2 className="text-danger mt-3 mb-3">title</h2>

        <div>
          <img className="w-50" src="image" alt="poster" />
        </div>
        <div className="container mt-3">
          <p>overview</p>
          <table class="table ">
            <tbody>
              <tr>
                <td colspan="2" class="table-active">
                  {/* {"Release Date:" + release_date} */}
                </td>
              </tr>
              <tr>
                <td colspan="2" class="table-active">
                  {/* {"Rate:" + vote_average} */}
                </td>
              </tr>
              <tr>
                <td colspan="2" class="table-active">
                  {/* {"Total Vote:" + vote_count} */}
                </td>
              </tr>
              <tr>
                <td colspan="2" class="table-active">
                  <Link to={-1}> Go Back</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Detail;
