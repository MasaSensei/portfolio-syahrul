import Atoms from "../../atoms";
import Organism from "../../organism";

const GalleryProjects = (props) => {
  const { project } = props;
  return (
    <section className="w-full min-h-screen bg-gray-800 flex flex-col items-center pb-5">
      <div className="container">
        <div className="mt-[90px]">
          <h1 className="text-7xl text-center font-poppins text-white">
            My Gallery Project
          </h1>
        </div>
        <div className="mt-[95px]">
          <div className="container flex justify-center">
            <div className="grid lg:grid-cols-3 gap-4">
              {project.map((project, index) => (
                <Atoms.ProjectList key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Organism.Footer />
    </section>
  );
};

export default GalleryProjects;
