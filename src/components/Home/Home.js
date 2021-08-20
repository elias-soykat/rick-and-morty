import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_DATA } from "../../graphql/Queries";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import "./Home.css";
import NavBar from ".././Navbar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ModalOpen from "./ModalOpen";

export default function Home() {
  const { loading, error, data } = useQuery(LOAD_DATA);
  const freshData = data?.characters.results;

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message="There was an error found !!" />;
  return (
    <div>
      <NavBar data={data} />
      <Header />
      <div className="mainWrapper mt-5 pt-3">
        <div className="row columnWrapper">
          {freshData.map(
            ({ name, image, status, species, location, episode }) => (
              <div key={name} className="col-md-6 mt-2 col-sm-2 columnWrapper2">
                <div className="cardWrapper">
                  <div className="imgWrapper">
                    <img src={image} alt={name} />
                  </div>
                  <div className="contentWrapper">
                    <div className="section">
                      <ModalOpen
                        image={image}
                        species={species}
                        status={status}
                        location={location}
                        name={name}
                      ></ModalOpen>
                      <span className="status">
                        <span
                          className={`${
                            status === "Dead"
                              ? "status__icon-dead"
                              : "status__icon"
                          }`}
                        ></span>
                        {status} - {species}
                      </span>
                    </div>
                    <div className="locationEpisode">
                      <div className="section">
                        <span className="text-gray">Last Location:</span>
                        {location.name}
                      </div>
                      <div className="section">
                        <span className="text-gray">First seen (episode):</span>
                        {episode[0].name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
