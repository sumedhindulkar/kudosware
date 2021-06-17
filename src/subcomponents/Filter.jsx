import React from "react";

export default function Filter(props) {
  const years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020,
  ];
  return (
    <div className=" filters p-4 col-2 " style={{ height: "95vh" }}>
      <div className="row gx-0 gy-0">
        <h3>Filters</h3>
        <p className="text-center">Launch Years</p>
        <hr className="mx-auto" />
        {years.map((year) => {
          return (
            <div
              onClick={() => {
                props.setYear(year);
              }}
              className="col-6"
            >
              <div className="my-btn px-2 py-1 my-1 mx-2">{year}</div>
            </div>
          );
        })}
        <p className="my-3 text-center">Successful Launch</p>
        <hr className="mx-auto" />

        <div className="col-6">
          <div className="my-btn px-2 py-1 my-1 mx-2">True</div>
        </div>
        <div className="col-6">
          <div className="my-btn px-2 py-1 my-1 mx-2">False</div>
        </div>

        <p className="my-3 text-center">Sucessful Landing</p>
        <hr className="mx-auto" />
        <div className="col-6">
          <div className="my-btn px-2 py-1 my-1 mx-2">True</div>
        </div>
        <div className="col-6">
          <div className="my-btn px-2 py-1 my-1 mx-2">False</div>
        </div>
      </div>
    </div>
  );
}
