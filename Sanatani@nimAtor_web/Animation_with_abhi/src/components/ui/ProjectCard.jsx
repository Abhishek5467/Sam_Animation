// src/Components/ProjectCard.jsx
import PropTypes from 'prop-types';
import ModelViewer from './ModelViewer';
import { Suspense } from 'react';
import AnimeClouds from "./Anime_clouds";
import Hand from "./Hand";
import AnimeWaterBody from "./Anime_like_waterbody";
import Perfume from "./Perfume";

const ModelComponent = ({ modelPath }) => {
    // Map model paths to components
    const modelComponents = {
        '/models/anime_clouds.glb': AnimeClouds,
        '/models/Hand.glb': Hand,
        '/models/anime_like_waterbody.glb': AnimeWaterBody,
        '/models/perfume.glb': Perfume,

      // Add other models here
    };

    const Component = modelComponents[modelPath];
    return Component ? <Component /> : (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
    );
};


const ProjectCard = ({ title, description, modelPath, tags, tools }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
        <Suspense fallback={null}>
            <ModelViewer>
                <ModelComponent modelPath={modelPath} />
            </ModelViewer>
        </Suspense>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modelPath: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ModelComponent.propTypes = {
    modelPath: PropTypes.string.isRequired,
};

export default ProjectCard;