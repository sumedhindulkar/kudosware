import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./subcomponents/Filter";
import Results from "./subcomponents/Result";
function Fetch() {
  const [data, setData] = useState(null);
  const [change, setChange] = useState({
    year: null,
    land: null,
    launch: null,
  });

  const link = "https://api.spacexdata.com/v3/launches?limit=100";

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(link).catch((e) => {
        console.log("Error:", e);
      });
      setData(data);
    };
    fetchData();
  }, []);
  const years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020,
  ];

  return (
    <div className="main-section m-4">
      <div className="row gx-0 gy-0">
        {/* <Filter setYear={setYear(changeYear)} /> */}
        <div className=" filters p-4 col-2 " style={{ height: "95vh" }}>
          <div className="row gx-0 gy-0">
            <h3>Filters</h3>
            <p className="text-center">Launch Years</p>
            <hr className="mx-auto" />
            {years.map((year) => {
              return (
                <div
                  onClick={() => {
                    setChange((prev) => {
                      return { land: null, launch: null, year: year };
                    });

                    console.log(change);
                  }}
                  className="col-6"
                >
                  <div className="my-btn px-2 py-1 my-1 mx-2">{year}</div>
                </div>
              );
            })}
            <p className="my-3 text-center">Successful Launch</p>
            <hr className="mx-auto" />

            <div
              className="col-6"
              onClick={() => {
                setChange((prev) => {
                  return { land: null, launch: true, year: null };
                });
                console.log(change);
              }}
            >
              <div className="my-btn px-2 py-1 my-1 mx-2">True</div>
            </div>
            <div
              className="col-6"
              onClick={() => {
                setChange((prev) => {
                  return { land: null, launch: false, year: null };
                });
                console.log(change);
              }}
            >
              <div className="my-btn px-2 py-1 my-1 mx-2">False</div>
            </div>

            <p className="my-3 text-center">Sucessful Landing</p>
            <hr className="mx-auto" />
            <div
              className="col-6"
              onClick={() => {
                setChange((prev) => {
                  return { launch: null, land: true, year: null };
                });
                console.log(change);
              }}
            >
              <div className="my-btn px-2 py-1 my-1 mx-2">True</div>
            </div>
            <div
              className="col-6"
              onClick={() => {
                setChange((prev) => {
                  return { launch: null, land: false, year: null };
                });
                console.log(change);
              }}
            >
              <div className="my-btn px-2 py-1 my-1 mx-2">False</div>
            </div>
          </div>
        </div>
        <div className="col-10 gx-0 gy-0 px-3">
          <div className="row">
            {data &&
              data.map((item, i) => {
                if (change.year && change.year == item.launch_year) {
                  return (
                    <Results
                      key={i}
                      img={item.links.mission_patch}
                      name={item.mission_name}
                      year={item.launch_year}
                      launch={item.launch_success}
                      land={item.rocket.first_stage.cores[0]["land_success"]}
                    />
                  );
                }
                if (change.land === item.launch_success) {
                  return (
                    <Results
                      key={i}
                      img={item.links.mission_patch}
                      name={item.mission_name}
                      year={item.launch_year}
                      launch={item.launch_success}
                      land={item.rocket.first_stage.cores[0]["land_success"]}
                    />
                  );
                }
                if (
                  change.launch ===
                  item.rocket.first_stage.cores[0]["land_success"]
                ) {
                  return (
                    <Results
                      key={i}
                      img={item.links.mission_patch}
                      name={item.mission_name}
                      year={item.launch_year}
                      launch={item.launch_success}
                      land={item.rocket.first_stage.cores[0]["land_success"]}
                    />
                  );
                }
                if (change.year === change.launch_year) {
                  return (
                    <Results
                      key={i}
                      img={item.links.mission_patch}
                      name={item.mission_name}
                      year={item.launch_year}
                      launch={item.launch_success}
                      land={item.rocket.first_stage.cores[0]["land_success"]}
                    />
                  );
                }
              })}
            {change.year && "e"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetch;
