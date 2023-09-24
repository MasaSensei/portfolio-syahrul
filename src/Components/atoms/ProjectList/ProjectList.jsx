import React from "react";

const ProjectList = (props) => {
  const { project } = props;

  const imageContainerStyle = {
    maxHeight: "300px", // Atur tinggi maksimum sesuai kebutuhan Anda
  };

  return (
    <div className="h-full container ">
      {project.image && project.alt ? (
        <div
          class="max-w-sm h-full overflow-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          style={imageContainerStyle}
        >
          <img
            class="rounded-t-lg h-auto w-[100%] object-cover object-bottom"
            src={project.image}
            alt={project.alt}
          />
          <div class="p-5 text-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </div>
      ) : (
        <div
          class="max-w-sm text-center h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          style={imageContainerStyle}
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
