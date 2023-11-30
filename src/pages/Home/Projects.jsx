import { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleProject from './ProjectsLits/SingleProject';


const Projects = () => {
    const [allData, setAllData] = useState([]);

    const fullStackProjects = allData.filter(item => item.category == 'FullStack');
    const frontendProjects = allData.filter(item => item.category == 'Frontend');
    const teamProjects = allData.filter(item => item.category == 'Team');
    const figmaToHtml = allData.filter(item => item.category == 'Figma');
    // console.log(teamProjects);

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    return (
        <div id="Project" className="mx-10 md:p-5">
            <h2 className="text-4xl border-l-4  border-orange-400"><span className='ml-2'>Projects</span></h2>

            <Tabs>

                <TabList className="mt-5 mb-12 md:my-12 md:mb-20 md:flex justify-center gap-10 ">
                    {/* All Tab */}
                    <Tab className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md shadow-lg font-medium flex items-center justify-between hover:text-orange-500 focus:text-orange-600 focus:border-orange-500">ALL Project <span className='px-3 py-2 bg-orange-400 text-white rounded-full ml-5 font-semibold text-sm'>{allData.length} </span></Tab>
                    {/* Full-Stack Tab */}
                    <Tab className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md shadow-lg font-medium  flex items-center justify-between hover:text-orange-500 focus:text-orange-600 focus:border-orange-500">Full Stack Project <span className='px-4 py-2 bg-orange-400 text-white rounded-full ml-5 font-semibold text-sm'>{fullStackProjects.length} </span>
                    </Tab>
                    {/* Front-End Tab */}
                    <Tab className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md shadow-lg font-medium  flex items-center justify-between hover:text-orange-500 focus:text-orange-600 focus:border-orange-500">Front-End Project <span className='px-4 py-2 bg-orange-400 text-white rounded-full ml-5 font-semibold text-sm'>{frontendProjects.length} </span>
                    </Tab>

                    {/* Figma to Html Tab */}
                    <Tab className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md shadow-lg font-medium  flex items-center justify-between hover:text-orange-500 focus:text-orange-600 focus:border-orange-500">Figma to HTML Project <span className='px-4 py-2 bg-orange-400 text-white rounded-full ml-5 font-semibold text-sm'>{figmaToHtml.length} </span>
                    </Tab>
                    {/* Team Tab */}
                    <Tab className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md shadow-lg font-medium  flex items-center justify-between hover:text-orange-500 focus:text-orange-600 focus:border-orange-500">Team Work Project <span className='px-4 py-2 bg-orange-400 text-white rounded-full ml-5 font-semibold text-sm'>{teamProjects.length} </span>
                    </Tab>
                </TabList>

                {/* All Project */}
                <TabPanel>
                   <div className='grid md:grid-cols-4 md:gap-10  my-5 md:my-0'>
                   {
                        allData.map(data => <SingleProject
                            key={data.id}
                            data={data}
                        ></SingleProject>)
                    }
                   </div>
                </TabPanel>
                {/* Full-Stack-Project */}
                <TabPanel>
                <div className='grid md:grid-cols-3 md:gap-10  my-5 md:my-0'>
                   {
                        fullStackProjects.map(data => <SingleProject
                            key={data.id}
                            data={data}
                        ></SingleProject>)
                    }
                   </div>
                </TabPanel>

                {/* Front-End Project */}
                <TabPanel>
                <div className='grid md:grid-cols-3 md:gap-10  my-5 md:my-0'>
                   {
                        frontendProjects.map(data => <SingleProject
                            key={data.id}
                            data={data}
                        ></SingleProject>)
                    }
                   </div>
                </TabPanel>

                {/* Figma to Html project */}
                <TabPanel>
                <div className='grid md:grid-cols-3 md:gap-10  my-5 md:my-0'>
                   {
                        figmaToHtml.map(data => <SingleProject
                            key={data.id}
                            data={data}
                        ></SingleProject>)
                    }
                   </div>
                </TabPanel>

                {/* team project */}
                <TabPanel>
                <div className='grid md:grid-cols-3 md:gap-10  my-5 md:my-0'>
                   {
                        teamProjects.map(data => <SingleProject
                            key={data.id}
                            data={data}
                        ></SingleProject>)
                    }
                   </div>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default Projects;