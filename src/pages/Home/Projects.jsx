import { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleProject from './ProjectsLits/SingleProject';
import TopLoaderAnimation from '../../components/TopLoader/TopLoaderAnimation';


const Projects = () => {
    const [allData, setAllData] = useState([]);
    const [progress, setProgress] = useState(0)

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
             <TopLoaderAnimation progress={progress} setProgress={setProgress}/>
            <h2 className="text-4xl border-l-4  border-orange-400"><span className='ml-2'>Projects</span></h2>

            <Tabs>

                <TabList   className="mt-5 mb-12 md:my-12 md:mb-20 md:flex justify-center gap-10 md:shadow-md md:py-3 bg-slate-50 rounded-md ">
                    {/* All Tab */}
                    <Tab onClick={() => setProgress(100)} className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md  font-medium hover:text-orange-500 focus:text-orange-600 focus:border-orange-500 hover:shadow-lg">ALL Project</Tab>
                    {/* Full-Stack Tab */}
                    <Tab onClick={() => setProgress(100)} className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md  font-medium hover:text-orange-500 focus:text-orange-600 focus:border-orange-500  hover:shadow-lg">Full Stack Project 
                    </Tab>
                    {/* Front-End Tab */}
                    <Tab onClick={() => setProgress(100)} className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md font-medium   hover:text-orange-500 focus:text-orange-600 focus:border-orange-500  hover:shadow-lg">Front-End Project 
                    </Tab>

                    {/* Figma to Html Tab */}
                    <Tab onClick={() => setProgress(100)} className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md font-medium  hover:text-orange-500 focus:text-orange-600 focus:border-orange-500  hover:shadow-lg">Figma to HTML Project 
                    </Tab>
                    {/* Team Tab */}
                    <Tab onClick={() => setProgress(100)} className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md  font-medium  hover:text-orange-500 focus:text-orange-600 focus:border-orange-500  hover:shadow-lg">Team Work Project 
                    </Tab>
                </TabList>

                {/* All Project */}
                <TabPanel>
                   <div className='grid md:grid-cols-3 md:gap-10  my-5 md:my-0'>
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