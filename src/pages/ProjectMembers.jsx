import React from "react";

const ProjectMembers = () => {
  return (
    // team members page 
    <div className="items-center">
      <div> Header </div>
      {/* div containing intro statement */}
      <div>
        <h3>Meet the team...</h3>
      </div>
      {/* div containing images */}
      <div>
        <div className="flex">
          <img src="./images/rasheed.jpeg" alt="image 1" />
          <img src="./images/akabogu.png" alt="image 2" />
          <img src="./images/habeeb.jpeg" alt="image 3" />
        </div>
        <div className="flex">
          <img src="./images/oyin.jpeg" alt="image 4" />
          <img src="./images/chisom.jpeg" alt="image 5" />
          <img src="./images/" alt="image 6" />
        </div>
        <div className="flex">
          <img src="./images/" alt="image 7" />
          <img src="./images/" alt="image 8" />
          <img src="./images/" alt="image 9" />
        </div>
      </div>
      <div> Footer </div>
    </div>
  );
};

export default ProjectMembers;
