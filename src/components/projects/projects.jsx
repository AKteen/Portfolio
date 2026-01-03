import React from 'react'
import './projects.css';

const Projects = () => {
  const tiles = [
    { id: 1, content: "RoughPaper Notes", bg: "project1.png" },
    { id: 2, content: "Tile 2" },
    { id: 3, content: "Tile 3" }
  ];

  return (
      <div className="pro-container"> 
      <div className="pro-title">Projects</div>
        <div className="pro-box">
            {tiles.map(tile => (
              <div 
                key={tile.id} 
                className="pro-tile"
                style={tile.bg ? { backgroundImage: `url(/${tile.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              >
                {tile.content}
              </div>
            ))}
        </div>
      </div>
  )
}

export default Projects;