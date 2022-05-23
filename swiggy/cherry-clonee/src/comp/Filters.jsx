import React from 'react'

const Filters = (filters, currentFilteredBy, updateFilter) => {
    console.log(filters)
  return (
   
    <div className="container restaurants">
        <h1>50 restaurants</h1>
        <div className="restaurant-options">
            {filters.filters.map((value, key) =>(<div className={`resturant-option ${currentFilteredBy === value ? "underline" :""}`}
            key={key}
            onClick={() =>{updateFilter(value)}} >
               {value}
            </div>
           
))}
{/*             
            <div className="restaurant-option">
                Cost Lost to High
            </div>
            <div className="restaurant-option">
                Ratings
            </div>
            <div className="restaurant-option">
                Delivery Time
            </div>
            <div className="restaurant-option">
                Relevance
            </div>
            
        </div> */}
    </div>
    </div>
  );
};

export default Filters